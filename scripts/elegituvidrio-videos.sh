#!/usr/bin/env bash
# Recomprime los 9 videos de "Elegí tu vidrio" para poder subirlos a public/.
#
# Uso (desde la raíz del repo, con ffmpeg instalado):
#   bash scripts/elegituvidrio-videos.sh
#
# Lee de assets-fuente/elegituvidrio-mirror-2026-08-03/videos (originales,
# entre 3 y 114 MB cada uno) y escribe en public/elegituvidrio/videos con el
# mismo nombre de archivo, así el HTML del mirror no se toca. 720p, H.264,
# sin audio si el original no lo tiene, optimizado para reproducir en web
# (faststart). Los .jpg de portada se copian tal cual.
#
# Ver docs/elegi-tu-vidrio.md y la nota en next.config.mjs.
set -euo pipefail

ORIGEN="assets-fuente/elegituvidrio-mirror-2026-08-03/videos"
DESTINO="public/elegituvidrio/videos"

command -v ffmpeg >/dev/null || { echo "Falta ffmpeg (sudo apt install ffmpeg)"; exit 1; }
[ -d "$ORIGEN" ] || { echo "No encuentro $ORIGEN"; exit 1; }
mkdir -p "$DESTINO"

for mp4 in "$ORIGEN"/*.mp4; do
  nombre="$(basename "$mp4")"
  echo "→ $nombre"
  ffmpeg -y -hide_banner -loglevel error -i "$mp4" \
    -vf "scale=-2:720" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
    -c:a aac -b:a 96k -movflags +faststart \
    "$DESTINO/$nombre"
done

cp "$ORIGEN"/*.jpg "$DESTINO"/ 2>/dev/null || true

echo
echo "Listo. Tamaños resultantes:"
du -h "$DESTINO"/*.mp4
