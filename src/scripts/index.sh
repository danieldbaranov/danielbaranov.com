#!/usr/bin/env sh
set -e

POSTS_DIR="src/content/posts"
OUT_DIR="public/blog"
TEMPLATE="src/templates/index.html"
HEADER="src/templates/header.html"

mkdir -p "$OUT_DIR"

TMP_INDEX="/tmp/blog-index.$$.md"

# --- Begin metadata ---
cat > "$TMP_INDEX" <<EOF
---
title: Blog
canonical: https://danielbaranov.com/blog/
posts:
EOF

for file in $(ls "$POSTS_DIR"/*.md | sort -r); do
  # Extract YAML front matter only
  front_matter=$(sed -n '1,/^---$/p' "$file" | sed '1d;$d')

  title=$(printf "%s\n" "$front_matter" | sed -n 's/^title:[[:space:]]*//p' | head -n 1)
  datePublished=$(printf "%s\n" "$front_matter" | sed -n 's/^datePublished:[[:space:]]*//p' | head -n 1)

  slug=$(basename "$file" .md)

  # Skip posts missing required metadata
  [ -z "$title" ] && continue
  [ -z "$datePublished" ] && continue

  cat >> "$TMP_INDEX" <<EOF
  - title: "$title"
    datePublished: "$datePublished"
    url: "/blog/$slug/"

EOF
done

# --- End metadata ---
echo "---" >> "$TMP_INDEX"
echo "" >> "$TMP_INDEX"

pandoc "$TMP_INDEX" \
  --template="$TEMPLATE" \
  --include-before-body="$HEADER" \
  --standalone \
  --metadata-file=src/metadata.yaml \
  -o "$OUT_DIR/index.html"

rm "$TMP_INDEX"
