---
title: Redesigning My Website
datePublished: 2026-01-05
dateModified: 2026-01-05
description: Release of website redesign
tags: [blog]
---

As it’s a new year, I decided to finally start a blog. The idea took shape after I came across a great article from the ReadME Project about [publishing your work online.](https://github.com/readme/guides/publishing-your-work).

When reading through other people's blogs, I noticed that a lot of the blogs I've read were made with [Bear ʕ•ᴥ•ʔ](https://bearblog.dev). I was a big fan of how simple and fast the websites were. 

In the past, I used to dabble with building web apps. For this I mainly used React or Vue as well as some other large frameworks built around those. This led to a large amount of bloat in my opinion for what is a fairly simple application with not super fancy styling. I came across several articles highlighting the importance of static html or txt sites for user experience as well as for [improving SEO](https://www.cloudflare.com/learning/performance/how-website-speed-boosts-seo/). Since I learned javascript primarily for react and react native, I thought that it would be cool to build a fully static website with no heavy framework.

## Why I Didn’t Use Existing Tools
Why would I reinvent the wheel when personal blogging is practically a solved problem by now? My main reason was mostly to help me learn. As I mentioned before, I never really touched regular HTML and CSS. My second reason is because I saw an [article about POSSE](https://indieweb.org/POSSE) (Publish on your Own Site, Syndicate Elsewhere) and I thought it would be nice to break away from monolithic platforms and own my content. This requires that I host my own website rather than use an existing service.

I originally thought of using something like [Hugo](https://gohugo.io) or [Jekyll](https://jekyllrb.com), which I found because I was originally planning on using Github Pages for free hosting and those were the recommended ones I found. I didn't like how I wasn't fully in charge of my ecosystem, and it didn't aid me in my learning at all really. The websites also did way more than I needed. Bearblogs, which I mentioned earlier, has the websites be extremely simple and fast to load by design. Sadly it seems it wasn't built for self-hosting.

For my website, I borrow heavily from ideas that the services I mentioned implement.

## Technical Approach
Much like those websites, I want to separate my content from the technical portion of the websites. I, much like they do, utilize markdown for the article content (originally I was going to use TeX, but I thought it was too much effort for virtually the same thing). To parse this content I use [Pandoc](https://pandoc.org) and convert it to static HTML5 files.

These HTML files borrow from the defined templates that have parameters for the pandoc variables. This allows me to fill out the website's content, schema, and file structure programmatically, minimizing the overhead of creating new content.

The HTML is completely semantic and only the most necessary CSS is included. This allows me to achieve a speed and size similar to what [Bear ʕ•ᴥ•ʔ](https://bearblog.dev) is able to achieve. The limitation is that there won't be any javascript at all since that adds overhead.

All scripting is done with Bash and Pandoc. As an extra flair, I include a plaintext version of each blog post, which you can reach by adding .txt to any URL.

## What’s Next
I'm fairly proud of this website, and I enjoyed the process of trying to overoptimize on speed and website size which provided some challenge. Keep in mind that this is just the first version of the website. It is still missing some key features that I will add down the line:

- **Dark Mode**. I know the CSS is barebones intentionally, but this is a nice QOL feature
- **RSS feed** so that updates can be provided in a structured format. If .txt is provided, there's no reason not to have this
- **More data in schema** so that hyperlinking from another platform provides the necessary metadata.
- **More posts**. Obviously I will be posting now that I started this blog. Make sure to stay tuned!

This website is both a learning exercise and a long-term home for my work, designed to stay simple, fast, and fully under my control.

[Source on GitHub](https://github.com/danieldbaranov/danielbaranov.com)