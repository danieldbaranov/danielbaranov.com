rm -r public

bash src/scripts/posts.sh
bash src/scripts/index.sh
bash src/scripts/home.sh
mkdir -p public/css
cp src/css/stylesheet.css public/css/stylesheet.css
cp src/favicon.svg public/favicon.svg