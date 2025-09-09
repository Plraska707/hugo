+++
date = '2025-09-06T15:34:12+02:00'
draft = false
title = 'Aprire alla rete locale'
weight = 4
+++

Per aprire una cartella alla condivisione su rete locale:
- aprire con sudo il file di configurazione: sudo vim /etc/samba/smb.conf
- aggiungere la cartella che si vuole condividere con questa struttura:

[sambashare]  
&nbsp;&nbsp;&nbsp;&nbsp;comment = Samba on Ubuntu  
&nbsp;&nbsp;&nbsp;&nbsp;path = /home/plraska/sambashare  
&nbsp;&nbsp;&nbsp;&nbsp;read only = no  
&nbsp;&nbsp;&nbsp;&nbsp;browsable = yes