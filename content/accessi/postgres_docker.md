+++
date = '2025-09-06T10:22:34+02:00'
draft = false
title = 'PostgreSQL su Docker'
weight = 6
+++

Per accedere al db PostgreSQL tramite docker, 
1. accedere al container del db con: `docker exec -it wikijs-db-1 /bin/bash`
2. accedere al db di postgresql con: `psql -U wikijs -d wiki`

Una volta nel db si possono usare i comandi SQL per interrogarlo, ad esempio

`SELECT * FROM users;`

fare attenzione al ; alla fine.