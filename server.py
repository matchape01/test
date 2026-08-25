"""
TANTRAMOUR 2026 — Serveur local (Python)
=========================================
Lance avec : python server.py  (ou double-clic sur start.bat)
Puis ouvre  : http://localhost:3000

Endpoints :
  POST /save   { filename, content }  → écrit le fichier dans le dossier Rapports/
  GET  /        → sert index.html
  GET  /*       → sert les fichiers statiques du dossier
"""

import base64
import http.server
import json
import mimetypes
import os
import socketserver
import urllib.parse
from pathlib import Path

PORT = 3000
ROOT = Path(__file__).parent.resolve()

# Fichiers autorisés à être modifiés via /save (sécurité)
ALLOWED = {
    'data.js',
    'logistics.js',
    'logistics.special.js',
    'logistics.helpers.js',
    'ref_descriptions.js',
    'ref_ressources.js',
    'ref_resource_types.js',
    'ref_lieux.js',
    'ref_types.js',
    'ref_jours.js',
    'ref_notes.js',
    'ref_news.js',
    'ref_equipements.js',
    'ref_equip_cat.js',
    'ref_consignes_type.js',
    'ref_consignes_recurrentes.js',
    'ref_piment.js',
    'ref_heures.js',
    'ref_display_reports.js',
}

mimetypes.add_type('text/javascript; charset=utf-8', '.js')
mimetypes.add_type('text/html; charset=utf-8', '.html')


class Handler(http.server.BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        # Filtre les requêtes statiques pour ne garder que l'essentiel
        path = args[0] if args else ''
        if '/save' in str(path) or '/log-requete' in str(path):
            print(f'  {fmt % args}')

    def send_cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors()
        self.end_headers()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)

        # ── POST /save ──────────────────────────────────────────────────────────
        if parsed.path == '/save':
            length = int(self.headers.get('Content-Length', 0))
            body   = self.rfile.read(length)
            try:
                payload  = json.loads(body)
                filename = payload.get('filename', '')
                content  = payload.get('content', '')

                base = os.path.basename(filename)
                if base not in ALLOWED:
                    self.send_response(403)
                    self.send_cors()
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'ok': False, 'error': f'Fichier non autorisé : {base}'}).encode('utf-8'))
                    return

                file_path = ROOT / base
                file_path.write_text(content, encoding='utf-8')
                print(f'[SAVE] {base} ({len(content)} octets)')

                self.send_response(200)
                self.send_cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': True, 'file': base}).encode('utf-8'))

            except Exception as e:
                print(f'[SAVE ERROR] {e}')
                self.send_response(500)
                self.send_cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': False, 'error': str(e)}).encode('utf-8'))
            return

        # ── POST /save-import ──────────────────────────────────────────────────
        if parsed.path == '/save-import':
            length = int(self.headers.get('Content-Length', 0))
            body   = self.rfile.read(length)
            try:
                payload  = json.loads(body)
                filename = payload.get('filename', '')
                b64      = payload.get('content_b64', '')

                # Sécurité : nom de fichier simple, extension .xlsx uniquement
                base = os.path.basename(filename)
                if not base or not base.lower().endswith('.xlsx') or '/' in base or '\\' in base:
                    self.send_response(403)
                    self.send_cors()
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'ok': False, 'error': f'Nom de fichier non autorisé : {base}'}).encode('utf-8'))
                    return

                import_dir = ROOT / 'IMPORT'
                import_dir.mkdir(exist_ok=True)
                file_path = import_dir / base
                file_path.write_bytes(base64.b64decode(b64))
                print(f'[SAVE-IMPORT] {base} ({file_path.stat().st_size} octets)')

                self.send_response(200)
                self.send_cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': True, 'file': base}).encode('utf-8'))

            except Exception as e:
                print(f'[SAVE-IMPORT ERROR] {e}')
                self.send_response(500)
                self.send_cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': False, 'error': str(e)}).encode('utf-8'))
            return

        # ── POST /log-requete ───────────────────────────────────────────────────
        if parsed.path == '/log-requete':
            length = int(self.headers.get('Content-Length', 0))
            body   = self.rfile.read(length)
            try:
                payload = json.loads(body)
                # Ignore silencieusement (pas de dépendance Excel en Python)
                self.send_response(200)
                self.send_cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': True}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_cors()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': False, 'error': str(e)}).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

    def do_GET(self):
        parsed  = urllib.parse.urlparse(self.path)
        url_path = parsed.path

        if url_path == '/' or url_path == '':
            url_path = '/index.html'

        # Sécurité : pas de sortie du dossier ROOT
        file_path = (ROOT / url_path.lstrip('/')).resolve()
        if not str(file_path).startswith(str(ROOT)):
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b'Interdit')
            return

        if not file_path.exists():
            self.send_response(404)
            self.send_header('Content-Type', 'text/plain; charset=utf-8')
            self.end_headers()
            self.wfile.write(f'Fichier introuvable : {url_path}'.encode('utf-8'))
            return

        mime, _ = mimetypes.guess_type(str(file_path))
        if not mime:
            mime = 'application/octet-stream'
        # Force charset UTF-8 pour JS et HTML
        if file_path.suffix in ('.js', '.html', '.css'):
            mime = mime.split(';')[0] + '; charset=utf-8'

        data = file_path.read_bytes()
        self.send_response(200)
        self.send_cors()
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', str(len(data)))
        # Désactive le cache navigateur pour les fichiers JS (données dynamiques)
        if file_path.suffix == '.js':
            self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(data)


if __name__ == '__main__':
    print()
    print('╔══════════════════════════════════════════════╗')
    print('║  TANTRAMOUR 2026 — Serveur local démarré     ║')
    print(f'║  http://localhost:{PORT}                       ║')
    print('║                                              ║')
    print('║  Ctrl+C pour arrêter                         ║')
    print('╚══════════════════════════════════════════════╝')
    print()

    class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
        daemon_threads = True
    server = ThreadingHTTPServer(('127.0.0.1', PORT), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n  Serveur arrêté.')
