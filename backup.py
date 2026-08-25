#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TANTRAMOUR 2026 — Backup automatique
======================================
Crée un ZIP horodaté dans Rapports/Backup/ à intervalles réguliers.
Nommage : backup_YYYY-MM-DD_HH-MM.zip

Usage :
  python backup.py              → intervalle par défaut (30 min)
  python backup.py --interval 15 → toutes les 15 minutes
  python backup.py --once        → un seul backup immédiat puis quitte

Fichiers sauvegardés : tous les .js, .html, .json, .py, .bat du dossier Rapports/
(les sous-dossiers Backup/ sont exclus pour éviter la récursion)
"""

import zipfile
import os
import sys
import time
import argparse
from datetime import datetime
from pathlib import Path

ROOT       = Path(__file__).parent.resolve()   # dossier Rapports/
BACKUP_DIR = ROOT / 'Backup'

# Extensions à inclure dans le ZIP
INCLUDE_EXT = {'.js', '.html', '.json', '.py', '.bat', '.css'}

# Nombre maximum de backups à conserver (les plus anciens sont supprimés)
MAX_BACKUPS = 48  # 48 × 30 min = 24 h de rétention par défaut


def make_backup():
    ts       = datetime.now().strftime('%Y-%m-%d_%H-%M')
    zip_name = f'backup_{ts}.zip'
    zip_path = BACKUP_DIR / zip_name

    BACKUP_DIR.mkdir(exist_ok=True)

    count = 0
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for f in sorted(ROOT.iterdir()):
            # Exclure le dossier Backup lui-même et les sous-dossiers
            if f.is_dir():
                continue
            if f.suffix.lower() not in INCLUDE_EXT:
                continue
            zf.write(f, f.name)
            count += 1

    size_kb = zip_path.stat().st_size // 1024
    print(f'  [BACKUP] {zip_name}  ({count} fichiers, {size_kb} Ko)')
    return zip_path


def cleanup_old_backups():
    """Supprime les backups auto les plus anciens si MAX_BACKUPS est dépassé."""
    zips = sorted(
        BACKUP_DIR.glob('backup_????-??-??_??-??.zip'),
        key=lambda p: p.stat().st_mtime
    )
    while len(zips) > MAX_BACKUPS:
        old = zips.pop(0)
        old.unlink()
        print(f'  [BACKUP] Supprimé (rétention) : {old.name}')


def run(interval_minutes, once=False):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace') if hasattr(sys.stdout, 'reconfigure') else None
    print()
    print('=' * 48)
    if once:
        print('  TANTRAMOUR 2026 - Backup unique')
    else:
        print(f'  TANTRAMOUR 2026 - Backup auto ({interval_minutes} min)')
    print('=' * 48)
    print()

    # Backup immédiat au démarrage
    make_backup()
    cleanup_old_backups()

    if once:
        return

    while True:
        time.sleep(interval_minutes * 60)
        try:
            make_backup()
            cleanup_old_backups()
        except Exception as e:
            print(f'  [BACKUP ERREUR] {e}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Backup automatique Tantramour 2026')
    parser.add_argument('--interval', type=int, default=30,
                        help='Intervalle en minutes entre chaque backup (défaut : 30)')
    parser.add_argument('--once', action='store_true',
                        help='Effectue un seul backup immédiat puis quitte')
    args = parser.parse_args()

    try:
        run(args.interval, args.once)
    except KeyboardInterrupt:
        print('\n  Backup arrêté.')
        sys.exit(0)
