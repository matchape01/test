/**
 * TANTRAMOUR 2026 — Serveur local
 * ================================
 * Lance avec : node server.js  (ou double-clic sur start.bat)
 * Puis ouvre : http://localhost:3000
 *
 * Endpoints :
 *   POST /save   { filename, content }  → écrit le fichier dans le dossier Rapports/
 *   GET  /       → sert index.html
 *   GET  /*      → sert les fichiers statiques du dossier
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname; // dossier où se trouve server.js

// ── MIME TYPES ───────────────────────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

// ── FICHIERS AUTORISÉS À ÊTRE MODIFIÉS ───────────────────────
// Sécurité : seuls ces fichiers peuvent être écrits par /save
const ALLOWED = new Set([
  'data.js',
  'logistics.js',
  'ref_ressources.js',
  'ref_resource_types.js',
  'ref_ressources.js',
  'ref_lieux.js',
  'ref_types.js',
  'ref_jours.js',
]);

// ── SERVEUR ───────────────────────────────────────────────────
const server = http.createServer((req, res) => {

  // En-têtes CORS pour autoriser les appels depuis le navigateur
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204); res.end(); return;
  }

  // ── POST /save ─────────────────────────────────────────────
  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { filename, content } = JSON.parse(body);

        // Validation : nom de fichier autorisé, pas de path traversal
        const base = path.basename(filename);
        if (!ALLOWED.has(base)) {
          res.writeHead(403, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: `Fichier non autorisé : ${base}` }));
          return;
        }

        const filePath = path.join(ROOT, base);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`[SAVE] ${base} (${content.length} octets)`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, file: base }));
      } catch (err) {
        console.error('[SAVE ERROR]', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // ── GET fichiers statiques ─────────────────────────────────
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  // Sécurité : pas de sortie du dossier ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end('Interdit'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Fichier introuvable : ${urlPath}`);
      return;
    }
    const ext  = path.extname(filePath);
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║  TANTRAMOUR 2026 — Serveur local démarré     ║');
  console.log(`║  http://localhost:${PORT}                       ║`);
  console.log('║                                              ║');
  console.log('║  Ctrl+C pour arrêter                         ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');
});
