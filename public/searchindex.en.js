var relearn_searchindex = [
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Se si vuole aggiungere un’app al menù delle applicazioni, è necessario:\nCreare un file del tipo: [Desktop Entry]\nVersion=1.0\nType=Application\nName=Tiddly Wiki editor\nComment=Tiddly Wiki editor\nExec=/home/plraska/.local/share/TiddlyDesktop/nw\nIcon=/home/plraska/.local/share/TiddlyDesktop/images/app-icon.png\nPath=/home/plraska/.local/share/TiddlyDesktop\nTerminal=false\nStartupNotify=false\nSalvarlo con estensione .desktop Spostarlo al percorso: ~/.local/share/applications/ o /usr/share/applications/",
    "description": "Se si vuole aggiungere un’app al menù delle applicazioni, è necessario:\nCreare un file del tipo: [Desktop Entry]\nVersion=1.0\nType=Application\nName=Tiddly Wiki editor\nComment=Tiddly Wiki editor\nExec=/home/plraska/.local/share/TiddlyDesktop/nw\nIcon=/home/plraska/.local/share/TiddlyDesktop/images/app-icon.png\nPath=/home/plraska/.local/share/TiddlyDesktop\nTerminal=false\nStartupNotify=false\nSalvarlo con estensione .desktop Spostarlo al percorso: ~/.local/share/applications/ o /usr/share/applications/",
    "tags": [],
    "title": "Aggiungere app al menù delle applicazioni",
    "uri": "/impostazioni_pc/aggiungere_app/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio",
    "content": "Sambashare\nIliadbox\nJellyfin\nFTP\nRaspberry Pi\nPostgreSQL su Docker",
    "description": "Sambashare\nIliadbox\nJellyfin\nFTP\nRaspberry Pi\nPostgreSQL su Docker",
    "tags": [],
    "title": "Accessi",
    "uri": "/accessi/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Accessi",
    "content": "Per accedere alle cartelle condivise con sambashare:\nAprire File Explorer Collegarsi all’indirizzo: smb://192.168.1.187/ Credenziali:\nUsername: plraska Password: Cuor_di_mele",
    "description": "Per accedere alle cartelle condivise con sambashare:\nAprire File Explorer Collegarsi all’indirizzo: smb://192.168.1.187/ Credenziali:\nUsername: plraska Password: Cuor_di_mele",
    "tags": [],
    "title": "Sambashare",
    "uri": "/accessi/sambashare/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio",
    "content": "Aggiungere app al menù delle applicazioni\nAlias\nNhentai\nAprire alla rete locale\nTwitch senza pubblicità\nAggiornare container Docker\nTagliare Video\nAggiungere cartella SMB a Jellyfin",
    "description": "Aggiungere app al menù delle applicazioni\nAlias\nNhentai\nAprire alla rete locale\nTwitch senza pubblicità\nAggiornare container Docker\nTagliare Video\nAggiungere cartella SMB a Jellyfin",
    "tags": [],
    "title": "Impostazioni PC",
    "uri": "/impostazioni_pc/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "alias containers=‘dockerps \u0026\u0026 podmanps’\nalias containersa=‘dockerpsa \u0026\u0026 podmanpsa’\nalias dockerps=‘docker ps –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias dockerpsa=‘docker ps -a –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias douroot=‘sudo chmod -R 777 /home/plraska/Desktop/Attilio/Gatcha/doujinshi/’\nalias hdd=‘sudo mount -t ntfs-3g -o remove_hiberfile /dev/sda1 /media/plraska/’\nalias l=‘ls -ltrh’\nalias la=‘ls -Ah’\nalias ll=‘ls -lh’\nalias log-out=‘gnome-session-quit’\nalias ls=‘ls –color=auto’\nalias myip=‘ifconfig wlo1 | grep ‘'‘inet ‘'’ | awk ‘'’{print $2}’'’’\nalias nhentai=‘docker run –rm -it -v /home/plraska/Desktop/Attilio/Gatcha/doujinshi:/output -v ~/.nhentai/:/root/.nhentai nhentai’\nalias podmanps=‘podman ps –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias podmanpsa=‘podman ps -a –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias puntata=‘py /home/plraska/Desktop/Programmazione/varie/script_uni/puntata_telefilm.py’\nalias py=‘python3.12’\nalias qBittorrent=‘docker start qbittorrent’\nalias raspberry=‘ssh pi4@192.168.1.61’\nalias sort=‘du -hs * | sort -h’\nalias update=‘sudo apt-get update \u0026\u0026 sudo apt-get upgrade -y \u0026\u0026 sudo apt-get dist-upgrade -y’\nalias youtube=‘ytfzf’\nnhfunction() {\nnhentai –id “$1”\ndouroot\ncd /home/plraska/Desktop/Attilio/Gatcha/doujinshi\npy convert_2_pdf.py\n}\nwiki(){\ncd /home/plraska/hugo/mywiki\nhugo server\n}",
    "description": "alias containers=‘dockerps \u0026\u0026 podmanps’\nalias containersa=‘dockerpsa \u0026\u0026 podmanpsa’\nalias dockerps=‘docker ps –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias dockerpsa=‘docker ps -a –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias douroot=‘sudo chmod -R 777 /home/plraska/Desktop/Attilio/Gatcha/doujinshi/’\nalias hdd=‘sudo mount -t ntfs-3g -o remove_hiberfile /dev/sda1 /media/plraska/’\nalias l=‘ls -ltrh’\nalias la=‘ls -Ah’\nalias ll=‘ls -lh’\nalias log-out=‘gnome-session-quit’\nalias ls=‘ls –color=auto’\nalias myip=‘ifconfig wlo1 | grep ‘'‘inet ‘'’ | awk ‘'’{print $2}’'’’\nalias nhentai=‘docker run –rm -it -v /home/plraska/Desktop/Attilio/Gatcha/doujinshi:/output -v ~/.nhentai/:/root/.nhentai nhentai’\nalias podmanps=‘podman ps –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias podmanpsa=‘podman ps -a –format ‘'’table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Names}}’'’’\nalias puntata=‘py /home/plraska/Desktop/Programmazione/varie/script_uni/puntata_telefilm.py’\nalias py=‘python3.12’\nalias qBittorrent=‘docker start qbittorrent’\nalias raspberry=‘ssh pi4@192.168.1.61’\nalias sort=‘du -hs * | sort -h’\nalias update=‘sudo apt-get update \u0026\u0026 sudo apt-get upgrade -y \u0026\u0026 sudo apt-get dist-upgrade -y’\nalias youtube=‘ytfzf’",
    "tags": [],
    "title": "Alias",
    "uri": "/impostazioni_pc/alias/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Accessi",
    "content": "Per accedere alla Iliadbox:\nAprire File Explorer Collegarsi all’indirizzo: smb://192.168.1.254/ Credenziali:\nUsername: plraska Password: Cuor_di_mele",
    "description": "Per accedere alla Iliadbox:\nAprire File Explorer Collegarsi all’indirizzo: smb://192.168.1.254/ Credenziali:\nUsername: plraska Password: Cuor_di_mele",
    "tags": [],
    "title": "Iliadbox",
    "uri": "/accessi/iliadbox/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Se si scaricano troppi hentai si va incontro ad un problema di cookie.\nPer evitarlo bisogna impostare l’user agent e i cookie, questultimo composta da\ncsrftoken sessionid cf_clearance. Questi tre sono identificabili tramite il Development Tool dopo aver effettuato l’accesso su nhentai.net:\nUsername: not_a_rifle Password: Bucatini_1 Ecco dove trovare i componenti dei cookie:\ncsrftoken: Settings → More Tools → Web Developer Tools → Storage → Cookie → csrftoken sessionid: Settings → More Tools → Web Developer Tools → Storage → Cookie → sessionid cf_clearance: Settings → More Tools → Web Developer Tools → Network → nhentai.net → Headers → cf_clearance useragent: cercare su google “my user agent” Questi sono quelli attualmente impostati:\nnhentai –useragent “Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0”\nnhentai –cookie “csrftoken=6Lw9o745l1CTq0QoMkywfgSKbbAp2nSn; sessionid=zt59ib12sttzfr6dpsv7i9pp0kkur8wm; cf_clearance=1lRAjMJZn1JkWGFRPweHgvcm7oN3KR2HCeiLprTbz6Y-1738402507-1.2.1.1-PScXxGYmIuJ1hMLjRNkQ.k1X5xmcWZny5flckcyD4KKsUOSAsXzYi0Qwq67XsfHswwPQHcDDSYz_LRuGYyhCYXOMLYZXYZFv7o6T61UJkW3PQ172T8dTR2.kVxkZ7Lf2mEFH0trEs1TwhnzRQYg0riwrra_ER2DHzF1Q4G4N.Q4jCEK4HtcxhLf7k2zCUHZg7O29Cwbu.uNnZF.wTnlEdZXi3fRebc8YSW.oeWvta7GjmJ_g.e5GnkqQHIodNLIpyjIyPrmwk3cBQB1LU5_VHssfJ5VgETX1nCrxu.SygEEPn4VaJ06okTHfwswVVvXpLd0NBZFMGe8IUBLxzamf1Q”",
    "description": "Se si scaricano troppi hentai si va incontro ad un problema di cookie.\nPer evitarlo bisogna impostare l’user agent e i cookie, questultimo composta da\ncsrftoken sessionid cf_clearance. Questi tre sono identificabili tramite il Development Tool dopo aver effettuato l’accesso su nhentai.net:\nUsername: not_a_rifle Password: Bucatini_1 Ecco dove trovare i componenti dei cookie:\ncsrftoken: Settings → More Tools → Web Developer Tools → Storage → Cookie → csrftoken sessionid: Settings → More Tools → Web Developer Tools → Storage → Cookie → sessionid cf_clearance: Settings → More Tools → Web Developer Tools → Network → nhentai.net → Headers → cf_clearance useragent: cercare su google “my user agent” Questi sono quelli attualmente impostati:",
    "tags": [],
    "title": "Nhentai",
    "uri": "/impostazioni_pc/nhentai/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Accessi",
    "content": "Per accedere a Jellyfin, collegarsi al server:\nhttp://192.168.1.15:8096\nCredenziali:\nUsername: plraska Password: Cuor_di_mele",
    "description": "Per accedere a Jellyfin, collegarsi al server:\nhttp://192.168.1.15:8096\nCredenziali:\nUsername: plraska Password: Cuor_di_mele",
    "tags": [],
    "title": "Jellyfin",
    "uri": "/accessi/jellyfin/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio",
    "content": "Installazione app ReVanced per Youtube\nQuesta guida potrebbe non essere aggiornata.\nIn alternativa c’è questo post su reddit che dovrebbe avere informazioni più recenti.\nSe dovesse sparire l’ho salvata come file HTML su Drive\nThis guide is for non-rooted devices but should still work fine on rooted devices\nPerform all of these steps from your phone.\nThis guide is for YouTube, but the same principles apply to other supported apps (see here for the list of supported apps)\nIf you have downloaded a pre-built APK from a website offering them, it’s not legit and may have been tampered with, so it’s highly recommended to uninstall it and build your own APK using this guide\nThe official website for ReVanced is https://revanced.app which redirects to the ReVanced GitHub\nDownload GmsCore, ReVanced Manager and YouTube APK: Download and install GmsCore so you can log into your YouTube account (https://github.com/ReVanced/GmsCore/releases).\nIf you already have Vanced or inotia00 MicroG installed, uninstall it as you won’t be able to update the new one otherwise\nDownload and install the latest ReVanced Manager APK\nDownload the latest recommended YouTube APK (19.16.39)\nBuild YouTube ReVanced APK: Open the manager, go to Patcher and tap on Select an application (https://i.imgur.com/HPdvkKr.png) Select Storage in the bottom right (https://i.imgur.com/sYcGzgp.png)\nYou may be prompted to give ReVanced Manager access to your storage, so say yes to this Select the YouTube APK you downloaded earlier (https://i.imgur.com/UIO99BP.png) Tap Selected patches (https://i.imgur.com/nkx4tWd.png) Tap Default to select the recommended patches (https://i.imgur.com/XC9YoSL.png)\nYou can turn patches on or off depending on what features you want Tap Done (https://i.imgur.com/oFZNGZ1.png) Tap Patch (https://i.imgur.com/NcnXqu0.png)\nWait a while for YouTube ReVanced to build (https://i.imgur.com/8BzPrPQ.png) Once it’s done, tap install (https://i.imgur.com/GpqgA0L.png).\nYou may get a warning saying the app isn’t from the Play Store and needs to be scanned.\nThis is normal because the app is not from the Play Store.\nYou can safely ignore the prompt and continue to install. Open YouTube ReVanced and log into your YouTube account Done!\nManager updates: The manager will have a blue update manager button when an update is available.\nTapping this will download the update and prompt you to install it.\nIf this ever fails, follow this link to the official manager APKs.\nDownload the latest APK and install it, updating your current installed version.\nThis should resolve your manager issues.\nYouTube ReVanced updates: OK so you’re patched and up to date, now what?\nKeep checking back in the manager for updates every few days.\nAs this is an alpha, it’s a little buggy, but over time this will improve.\nFor now, when you go to apply patches to your YouTube APK, make a note of the patch version displayed in the top right.\nChances are, you don’t need to re-patch until there’s an updated version.\nSo if it currently says the version is something like v2.143.0 and you patched to that, you’re all good.\nIf you open the manager a few days later and it says something like v2.146.0 then it’s probably a good idea to re-patch and update.\nI believe the devs are implementing a feature at some point to show you what updates you’re missing to prompt you to re-patch.\nAgain, this is an alpha and will improve over time.\nYouTube ReVanced crashes instantly when I open it: It’s likely that you downloaded and patched the wrong APK.\nEnsure you download the APK that says APK in grey.\nDo not select the version that says bundle as this is the split APK and will not work properly.\nOnce you’ve done this, uninstall your current installed YouTube ReVanced.\nThen follow the above steps again to build a new APK.\nIf this doesn’t work, build the APK again using the Recommended patches option.\nIf you’ve done all of this and it’s still not working, then post a thread here or on the official Discord server for support.",
    "description": "Installazione app ReVanced per Youtube\nQuesta guida potrebbe non essere aggiornata.\nIn alternativa c’è questo post su reddit che dovrebbe avere informazioni più recenti.\nSe dovesse sparire l’ho salvata come file HTML su Drive\nThis guide is for non-rooted devices but should still work fine on rooted devices\nPerform all of these steps from your phone.\nThis guide is for YouTube, but the same principles apply to other supported apps (see here for the list of supported apps)",
    "tags": [],
    "title": "Istruzioni ReVanced",
    "uri": "/istruzioni_revanced/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Per aprire una cartella alla condivisione su rete locale:\naprire con sudo il file di configurazione: sudo vim /etc/samba/smb.conf aggiungere la cartella che si vuole condividere con questa struttura: [sambashare]\ncomment = Samba on Ubuntu\npath = /home/plraska/sambashare\nread only = no\nbrowsable = yes",
    "description": "Per aprire una cartella alla condivisione su rete locale:\naprire con sudo il file di configurazione: sudo vim /etc/samba/smb.conf aggiungere la cartella che si vuole condividere con questa struttura: [sambashare]\ncomment = Samba on Ubuntu\npath = /home/plraska/sambashare\nread only = no\nbrowsable = yes",
    "tags": [],
    "title": "Aprire alla rete locale",
    "uri": "/impostazioni_pc/aprire_rete_locale/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Accessi",
    "content": "Per accedere al telefono tramite ftp da terminale:\nusare il comando: ftp -p 192.168.1.189 2121 inserire utente e password definiti sull’app Se si vuole usare direttamente il file manager, inserire nella barra di ricerca il percorso indicato sull’app.",
    "description": "Per accedere al telefono tramite ftp da terminale:\nusare il comando: ftp -p 192.168.1.189 2121 inserire utente e password definiti sull’app Se si vuole usare direttamente il file manager, inserire nella barra di ricerca il percorso indicato sull’app.",
    "tags": [],
    "title": "FTP",
    "uri": "/accessi/ftp/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Per eliminare la pubblicità da twitch, seguire questi passaggi descritti su questa pagina\nAndare sull’estensione uBlock Origin Andare su Preferences Spostarsi sulla scheda My Filters e aggiungere twitch.tv##+js(twitch-videoad) Spostarsi sulla scheda Settings, attivare I am an advanced user e cliccare sull’icona dell’ingranaggio che compare. Modificare il valore di userResourcesLocation da unset all’url completo della soluzione che si vuole usare (se è già presente un url, aggiungere uno spazio dopo quello esistente).\nNel nostro caso:\nuserResourcesLocation https://raw.githubusercontent.com/pixeltris/TwitchAdSolutions/master/video-swap-new/video-swap-new-ublock-origin.js Attivare e Disattivare l’estensione o riavviare il browser.",
    "description": "Per eliminare la pubblicità da twitch, seguire questi passaggi descritti su questa pagina\nAndare sull’estensione uBlock Origin Andare su Preferences Spostarsi sulla scheda My Filters e aggiungere twitch.tv##+js(twitch-videoad) Spostarsi sulla scheda Settings, attivare I am an advanced user e cliccare sull’icona dell’ingranaggio che compare. Modificare il valore di userResourcesLocation da unset all’url completo della soluzione che si vuole usare (se è già presente un url, aggiungere uno spazio dopo quello esistente).\nNel nostro caso:\nuserResourcesLocation https://raw.githubusercontent.com/pixeltris/TwitchAdSolutions/master/video-swap-new/video-swap-new-ublock-origin.js Attivare e Disattivare l’estensione o riavviare il browser.",
    "tags": [],
    "title": "Twitch senza pubblicità",
    "uri": "/impostazioni_pc/twitch/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Accessi",
    "content": "Per accedere al Raspberry Pi:\naprire il terminale e lanciare: ssh raspi@192.168.1.61 inserire la password: Pet_sematary oppure lanciare l’alias “raspberry” corrispondente a:\nalias raspberry='ssh pi4@192.168.1.61'\nper il quale è stata definita una chiave ssh.",
    "description": "Per accedere al Raspberry Pi:\naprire il terminale e lanciare: ssh raspi@192.168.1.61 inserire la password: Pet_sematary oppure lanciare l’alias “raspberry” corrispondente a:\nalias raspberry='ssh pi4@192.168.1.61'\nper il quale è stata definita una chiave ssh.",
    "tags": [],
    "title": "Raspberry Pi",
    "uri": "/accessi/raspberry_pi/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Quando si vuole aggiornare un container, andare nella cartella con il file docker-compose.yml del container da aggiornare e lanciare:\ndocker compose pull \u0026\u0026 docker compose up -d",
    "description": "Quando si vuole aggiornare un container, andare nella cartella con il file docker-compose.yml del container da aggiornare e lanciare:\ndocker compose pull \u0026\u0026 docker compose up -d",
    "tags": [],
    "title": "Aggiornare container Docker",
    "uri": "/impostazioni_pc/aggiornare_container/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Accessi",
    "content": "Per accedere al db PostgreSQL tramite docker,\naccedere al container del db con: docker exec -it wikijs-db-1 /bin/bash accedere al db di postgresql con: psql -U wikijs -d wiki Una volta nel db si possono usare i comandi SQL per interrogarlo, ad esempio\nSELECT * FROM users;\nfare attenzione al ; alla fine.",
    "description": "Per accedere al db PostgreSQL tramite docker,\naccedere al container del db con: docker exec -it wikijs-db-1 /bin/bash accedere al db di postgresql con: psql -U wikijs -d wiki Una volta nel db si possono usare i comandi SQL per interrogarlo, ad esempio\nSELECT * FROM users;\nfare attenzione al ; alla fine.",
    "tags": [],
    "title": "PostgreSQL su Docker",
    "uri": "/accessi/postgres_docker/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Ci sono due metodi, uno più veloce e uno con qualità migliore:\nQualità migliore: ffmpeg -i video.mp4 -ss hh:mm:ss -to hh:mm:ss -async 1 cut.mp4\nPiù veloce: ffmpeg -i video.mp4 -ss hh:mm:ss -to hh:mm:ss -c:v copy -c:a copy output.mp4",
    "description": "Ci sono due metodi, uno più veloce e uno con qualità migliore:\nQualità migliore: ffmpeg -i video.mp4 -ss hh:mm:ss -to hh:mm:ss -async 1 cut.mp4\nPiù veloce: ffmpeg -i video.mp4 -ss hh:mm:ss -to hh:mm:ss -c:v copy -c:a copy output.mp4",
    "tags": [],
    "title": "Tagliare video",
    "uri": "/impostazioni_pc/tagliare_video/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio \u003e Impostazioni PC",
    "content": "Montare in locale la cartella SMB: sudo mkdir /mnt/nas sudo apt-get install cifs-utils sudo mount -t cifs -o user=plraska //192.168.1.254/iliadbox/Video /mnt/nas Creare file .smb nella home con le credenziali di accesso: username = plraska password = Cuor_di_mele Aggiungere queste righe al file /etc/fstab //192.168.1.254/iliadbox/Video /mnt/nas cifs uid=0,credentials=/home/plraska/.smb,iocharset=utf8,vers=3.0,noperm 0 0\nRiferimenti:\nChris Tech Blog",
    "description": "Montare in locale la cartella SMB: sudo mkdir /mnt/nas sudo apt-get install cifs-utils sudo mount -t cifs -o user=plraska //192.168.1.254/iliadbox/Video /mnt/nas Creare file .smb nella home con le credenziali di accesso: username = plraska password = Cuor_di_mele Aggiungere queste righe al file /etc/fstab //192.168.1.254/iliadbox/Video /mnt/nas cifs uid=0,credentials=/home/plraska/.smb,iocharset=utf8,vers=3.0,noperm 0 0\nRiferimenti:\nChris Tech Blog",
    "tags": [],
    "title": "Aggiungere cartella SMB a Jellyfin",
    "uri": "/impostazioni_pc/aggiungere_smb_jellyfin/index.html"
  },
  {
    "breadcrumb": "",
    "content": "In questa wiki ci sono le istruzioni per accedere ai vari servizi e ricreare le funzioni che ho sul pc.\nAccessi\nImpostazioni PC\nIstruzioni ReVanced",
    "description": "In questa wiki ci sono le istruzioni per accedere ai vari servizi e ricreare le funzioni che ho sul pc.\nAccessi\nImpostazioni PC\nIstruzioni ReVanced",
    "tags": [],
    "title": "Wiki di Attilio",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Wiki di Attilio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
