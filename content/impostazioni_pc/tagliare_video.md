+++
date = '2025-09-06T15:34:57+02:00'
draft = false
title = 'Tagliare video'
weight = 7
+++


Ci sono due metodi, uno più veloce e uno con qualità migliore:

- Qualità migliore:

`ffmpeg -i video.mp4 -ss hh:mm:ss -to hh:mm:ss -async 1 cut.mp4`

- Più veloce:

`ffmpeg -i video.mp4 -ss hh:mm:ss -to hh:mm:ss -c:v copy -c:a copy output.mp4`