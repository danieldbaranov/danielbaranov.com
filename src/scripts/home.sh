pandoc "src/content/home.md" \
  --metadata-file=src/metadata.yaml \
  --template=src/templates/home.html \
  --include-before-body=src/templates/header.html \
  --standalone \
  --to=html5 \
  -o "public/index.html"