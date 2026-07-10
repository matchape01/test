@echo off
echo.
echo  TANTRAMOUR 2026 — Demarrage du serveur local
echo  =============================================
echo.

cd /d "%~dp0"

:: Essaie Python (disponible sur cette machine)
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  echo  Serveur Python demarre sur http://localhost:3000
  echo  Ouvre ton navigateur sur : http://localhost:3000
  echo  Appuie sur Ctrl+C pour arreter.
  echo.
  start "" http://localhost:3000
  python server.py
  pause
  exit /b 0
)

:: Essaie Python3
where python3 >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  start "" http://localhost:3000
  python3 server.py
  pause
  exit /b 0
)

echo  ERREUR : Python n'est pas installe ou introuvable dans le PATH.
echo  Telecharge Python sur https://www.python.org/downloads/
echo  Coche "Add Python to PATH" lors de l'installation, puis relance ce fichier.
echo.
pause
