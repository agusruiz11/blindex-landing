#!/usr/bin/env bash
# Recomprime los videos de "Elegí tu vidrio" para poder subirlos a public/.
# Ya se corrió el 23/09/2026 para los 17 videos (ver docs/elegi-tu-vidrio.md);
# sirve para reemplazar alguno si el cliente manda un original nuevo.
#
# Uso (desde la raíz del repo, con ffmpeg instalado):
#   bash scripts/elegituvidrio-videos.sh [carpeta-con-mp4]
#
# Lee de la carpeta indicada (por defecto
# assets-fuente/elegituvidrio-mirror-2026-08-03/videos, que sólo tiene 9 de
# los 17) y escribe en public/elegituvidrio/videos con el mismo nombre de
# archivo, así el HTML no se toca. 720p, H.264 crf 28, audio AAC 96k,
# optimizado para reproducir en web (faststart). Los .jpg de portada se
# copian tal cual.
#
# Ver docs/elegi-tu-vidrio.md y la nota en next.config.mjs.
set -euo pipefail

ORIGEN="${1:-assets-fuente/elegituvidrio-mirror-2026-08-03/videos}"
DESTINO="public/elegituvidrio/videos"

command -v ffmpeg >/dev/null || { echo "Falta ffmpeg (sudo apt install ffmpeg)"; exit 1; }
[ -d "$ORIGEN" ] || { echo "No encuentro $ORIGEN"; exit 1; }
mkdir -p "$DESTINO"

for mp4 in "$ORIGEN"/*.mp4; do
  nombre="$(basename "$mp4")"
  echo "→ $nombre"
  ffmpeg -y -hide_banner -loglevel error -i "$mp4" \
    -vf "scale=-2:720" -c:v libx264 -preset medium -crf 28 -pix_fmt yuv420p \
    -c:a aac -b:a 96k -movflags +faststart \
    "$DESTINO/$nombre"
done

cp "$ORIGEN"/*.jpg "$DESTINO"/ 2>/dev/null || true

echo
echo "Listo. Tamaños resultantes:"
du -h "$DESTINO"/*.mp4
