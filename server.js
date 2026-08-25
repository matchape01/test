/**
 * TANTRAMOUR 2026 — Serveur local
 * ================================
 * Lance avec : node server.js  (ou double-clic sur start.bat)
 * Puis ouvre : http://localhost:3000
 *
 * Endpoints :
 *   POST /save         { filename, content }  → écrit le fichier dans le dossier Rapports/
 *   POST /log-requete  { requete, reponse }   → ajoute une ligne dans Requetes.xlsx (via CSV)
 *   GET  /             → sert index.html
 *   GET  /*            → sert les fichiers statiques du dossier
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');
const { execFile } = require('child_process');

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
  'logistics.special.js',
  'logistics.helpers.js',
  'ref_descriptions.js',
  'ref_ressources.js',
  'ref_resource_types.js',
  'ref_ressources.js',
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

  // ── POST /log-requete ──────────────────────────────────────
  if (req.method === 'POST' && req.url === '/log-requete') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { requete, reponse } = JSON.parse(body);
        const now  = new Date();
        const date = now.toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric' });
        const heure = now.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });

        // Échappe les guillemets doubles pour le CSV
        function csvEsc(s) { return '"' + String(s||'').replace(/"/g, '""') + '"'; }
        const line = [csvEsc(date), csvEsc(heure), csvEsc(requete), csvEsc(reponse)].join(',') + '\r\n';

        const csvPath  = path.join(ROOT, 'Requetes.csv');
        const xlsxPath = path.join(ROOT, 'Requetes.xlsx');

        // Crée l'en-tête CSV si le fichier n'existe pas encore
        if (!fs.existsSync(csvPath)) {
          fs.writeFileSync(csvPath, '\uFEFF"Date","Heure","Requete","Reponse Bob"\r\n', 'utf-8');
        }
        fs.appendFileSync(csvPath, line, 'utf-8');

        // Met à jour le fichier Excel via PowerShell (en arrière-plan, non bloquant)
        const ps = [
          '$csv = Import-Csv -Path "' + csvPath.replace(/"/g, '`"') + '" -Delimiter "," -Encoding UTF8;',
          '$excel = New-Object -ComObject Excel.Application;',
          '$excel.Visible = $false; $excel.DisplayAlerts = $false;',
          'if (Test-Path "' + xlsxPath.replace(/"/g, '`"') + '") {',
          '  $wb = $excel.Workbooks.Open("' + xlsxPath.replace(/"/g, '`"') + '");',
          '  $ws = $wb.Worksheets.Item(1);',
          '} else {',
          '  $wb = $excel.Workbooks.Add(); $ws = $wb.Worksheets.Item(1); $ws.Name = "Requetes";',
          '  $ws.Cells.Item(1,1) = "Date"; $ws.Cells.Item(1,2) = "Heure";',
          '  $ws.Cells.Item(1,3) = "Requete"; $ws.Cells.Item(1,4) = "Reponse Bob";',
          '  $h = $ws.Range("A1:D1"); $h.Font.Bold = $true;',
          '  $ws.Columns.Item(1).ColumnWidth = 12; $ws.Columns.Item(2).ColumnWidth = 10;',
          '  $ws.Columns.Item(3).ColumnWidth = 60; $ws.Columns.Item(4).ColumnWidth = 60;',
          '};',
          '$row = $ws.UsedRange.Rows.Count + 1;',
          'if ($ws.Cells.Item(1,1).Text -eq "") { $row = 2; };',
          '$last = $csv | Select-Object -Last 1;',
          '$ws.Cells.Item($row,1) = $last.Date;',
          '$ws.Cells.Item($row,2) = $last.Heure;',
          '$ws.Cells.Item($row,3) = $last.Requete;',
          '$ws.Cells.Item($row,4) = $last."Reponse Bob";',
          '$ws.Columns.Item(3).WrapText = $true; $ws.Columns.Item(4).WrapText = $true;',
          '$wb.SaveAs("' + xlsxPath.replace(/"/g, '`"') + '", 51);',
          '$wb.Close($false); $excel.Quit();',
        ].join(' ');

        execFile('powershell.exe', ['-NoProfile', '-Command', ps], (err) => {
          if (err) console.error('[LOG-REQUETE PS]', err.message);
          else console.log(`[LOG-REQUETE] ${date} ${heure} — ${String(requete).substring(0,60)}…`);
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        console.error('[LOG-REQUETE ERROR]', err.message);
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
