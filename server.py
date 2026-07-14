#!/usr/bin/env python3
"""
TANTRAMOUR 2026 — Serveur local
================================
Lance avec : python server.py  (ou double-clic sur start.bat)
Puis ouvre  : http://localhost:3000
"""

import http.server
import json
import os
import sys
from pathlib import Path

PORT  = 3000
ROOT  = Path(__file__).parent.resolve()

# Seuls ces fichiers peuvent être écrits via /save
ALLOWED = {
    'data.js',
    'logistics.js',
    'ref_ressources.js',
    'ref_resource_types.js',
    'ref_lieux.js',
    'ref_types.js',
    'ref_jours.js',
    'ref_notes.js',
    'ref_piment.js',
    'ref_heures.js',
}

MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js':   'text/javascript; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.json': 'application/json',
    '.ico':  'image/x-icon',
    '.png':  'image/png',
}


class Handler(http.server.BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        print(f"  {args[0]} {args[1]}")

    def send_cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors()
        self.end_headers()

    # ── POST /save ────────────────────────────────────────────
    def do_POST(self):
        if self.path != '/save':
            self._not_found(); return

        length = int(self.headers.get('Content-Length', 0))
        body   = self.rfile.read(length)

        try:
            data     = json.loads(body)
            filename = os.path.basename(data['filename'])
            content  = data['content']

            if filename not in ALLOWED:
                self._json(403, {'ok': False, 'error': f'Fichier non autorisé : {filename}'})
                return

            filepath = ROOT / filename
            filepath.write_text(content, encoding='utf-8')
            print(f"  [SAVE] {filename}  ({len(content)} octets)")
            self._json(200, {'ok': True, 'file': filename})

        except Exception as e:
            print(f"  [ERREUR] {e}")
            self._json(500, {'ok': False, 'error': str(e)})

    # ── GET fichiers statiques ─────────────────────────────────
    def do_GET(self):
        url_path = self.path.split('?')[0]
        if url_path in ('/', ''):
            url_path = '/index.html'

        # Sécurité : pas de path traversal
        try:
            rel  = url_path.lstrip('/')
            file = (ROOT / rel).resolve()
            if not str(file).startswith(str(ROOT)):
                self._forbidden(); return
        except Exception:
            self._forbidden(); return

        if not file.exists():
            self._not_found(); return

        ext  = file.suffix.lower()
        mime = MIME.get(ext, 'application/octet-stream')
        data = file.read_bytes()

        self.send_response(200)
        self.send_cors()
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', len(data))
        # Désactive le cache navigateur pour que les fichiers .js soient toujours frais
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(data)

    # ── helpers ───────────────────────────────────────────────
    def _json(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_cors()
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(body))
        self.end_headers()
        self.wfile.write(body)

    def _not_found(self):
        self._json(404, {'error': 'Not found'})

    def _forbidden(self):
        self._json(403, {'error': 'Forbidden'})


if __name__ == '__main__':
    os.chdir(ROOT)
    print()
    print('╔══════════════════════════════════════════════╗')
    print('║  TANTRAMOUR 2026 — Serveur local démarré     ║')
    print(f'║  http://localhost:{PORT}                       ║')
    print('║                                              ║')
    print('║  Ctrl+C pour arrêter                         ║')
    print('╚══════════════════════════════════════════════╝')
    print()

    server = http.server.HTTPServer(('127.0.0.1', PORT), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n  Serveur arrêté.')
        sys.exit(0)
