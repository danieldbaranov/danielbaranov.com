#!/usr/bin/env sh

BASE_URL=https://danielbaranov.com

for file in src/content/posts/*.md; do
  name=$(basename "$file" .md)

  mkdir -p "public/blog/$name"

  pandoc "$file" \
    --template=src/templates/post.html \
    --include-before-body=src/templates/header.html \
    --standalone \
    --to=html5 \
    -M canonical=$BASE_URL/blog/$name/ \
    --metadata-file=src/metadata.yaml \
    -o "public/blog/$name/index.html"

    pandoc "$file" \
    --to=plain \
    -o "public/blog/$name.txt"
done
