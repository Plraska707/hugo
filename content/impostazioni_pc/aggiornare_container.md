+++
date = '2025-09-06T15:34:34+02:00'
draft = false
title = 'Aggiornare container Docker'
weight = 6
+++

Quando si vuole aggiornare un container, andare nella cartella con il file docker-compose.yml del container da aggiornare e lanciare:

`docker compose pull && docker compose up -d`