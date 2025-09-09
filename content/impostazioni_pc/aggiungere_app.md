+++
date = '2025-09-06T15:33:36+02:00'
draft = false
title = 'Aggiungere app al menù delle applicazioni'
weight = 1
+++

Se si vuole aggiungere un'app al menù delle applicazioni, è necessario:

- Creare un file del tipo:

>
[Desktop Entry]  
Version=1.0  
Type=Application  
Name=Tiddly Wiki editor  
Comment=Tiddly Wiki editor  
Exec=/home/plraska/.local/share/TiddlyDesktop/nw  
Icon=/home/plraska/.local/share/TiddlyDesktop/images/app-icon.png  
Path=/home/plraska/.local/share/TiddlyDesktop  
Terminal=false  
StartupNotify=false
>  

- Salvarlo con estensione .desktop
- Spostarlo al percorso: `~/.local/share/applications/` o `/usr/share/applications/`