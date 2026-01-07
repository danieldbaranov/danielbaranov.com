# danielbaranov.com
Minimalist static website generated from markdown using Pandoc

Website content in [```/src/content```](/src/content)

Full blogpost done on website redesign [here](https://danielbaranov.com/blog/redesigning-my-website/)

## Installation
The only requirement is Pandoc. To download pandoc 3.8.3 and build the website in one line with on linux:

```curl -L https://github.com/jgm/pandoc/releases/download/3.8.3/pandoc-3.8.3-linux-amd64.tar.gz | tar -xz && PATH="$PWD/pandoc-3.8.3/bin:$PATH" bash build.sh```

Build files are generated in ```/public```
