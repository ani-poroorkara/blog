---
layout: post
title: "Create your own FREE Blog!"
categories: HowTo 
subtitle: Create your own free blog within an hour using Jekyll and Github Pages
comments: true
---

### Hiii Everyone!!! You've made it to my first tutoial!!! <br> This is How to create your own blog in ten easy steps! And it's completely FREE! Coincidence? Maybe!

This entire blog is created using the same method so you know it's efficient and capable. We will be using Jekyll to create our blog site and GitHub Pages to host them for free! Is anything in life free though? Well, this is not a philosophy class so let's not waste anymore time and get straight into it!

### What will you require?
1. Just a general idea of HTML. 
2. A good code editor like VS Code.
3. A brief idea on what markdown is and how to write them.
4. Basic usage of GitHub.
4. Sass and CSS if you want to style your page. It's strictly optional so don't sweat it! 

If you aren't aware of some of the topics, worry not! I had no idea about Jekyll before I created this page. Just keep your will to learn high and go through the references I provide to you throughout this post.

### Stairway to build it
1. [What is Jekyll?](#step-1) 
2. [What is Github Pages?](#step-2) 
3. [Generating your site](#step-3) 
4. [Making the site truly yours](#step-4)
5. [Pushing your blog to GitHub](#step-5)
6. [Deploy your Blog on Github Pages](#step-6)
7. [Understanding the file structure](#step-7)
8. [Publishing your Post](#step-8)
9. [Pushing your new post into your Blog](#step-9)
10. [References](#step-10) 

#### 1. Jekyll {#step-1}
Let's address the elephant on the site... Why Jekyll? Jekyll will help us publish all our posts in a very simple manner. It needs no HTML, no CSS and no complex databases. You will be writing in your notepad text file without worrying about any technical stuff! This was one of my major reasons of choosing Jekyll as I did not want to put in any extra effort for a blog. 

There are many different posts on how to install Jekyll for your OS so I'm not going to be repetitive and bore you. So go on and <a href="https://jekyllrb.com/docs/installation/" target="_blank">install Jekyll</a> and let's meet back here to create your site!

#### 2. Github Pages {#step-2}
Github Pages is basically free hostage for any of the projects you have on GitHub. If you don't know what GitHub is, then you probably should get familiar with it cause it's an important part of publishing our posts. I'll go over the publication of your posts in step 8 though I strongly recommend you go through GitHub pages once.

If you already have a GitHub account, there's nothing else to do here or else go ahead and <a href="https://github.com/join" target="_blank">create an account</a> now.

We are all set now! Let's begin with our blog!

#### 3. Generating Your Site {#step-3}
Firstly, create an empty folder and let's name it whatever your website is going to be called. I am going to name it "blog" *(SO CREATIVE)*

Let's navigate to this folder using command prompt or VS Code or your favorite code editor and run the command
```console
jekyll new .
```
and it should then show something similar to this
```console
Running bundle install in Desktop/blog... 
  Bundler: Fetching gem metadata from https://rubygems.org/..........
  Bundler: Resolving dependencies...

New jekyll site installed in Desktop/blog.
```
Now let's try running our site using 
```console
bundle exec jekyll serve
```
If you get some output like 
```console
Configuration file: Desktop/blog/_config.yml
            Source: Desktop/blog
       Destination: Desktop/blog/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.744 seconds.
 Auto-regeneration: enabled for 'Desktop/blog'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```
Yayy! We have successfully hosted our site locally!! Just open the url http://127.0.0.1:4000/ in your web browser and you'll see the start page!

In some cases, you might encounter this error
```console
C:/Ruby30-x64/lib/ruby/gems/3.0.0/gems/jekyll-4.2.0/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)
```
Worry not! I got you! This is because you haven't installed webrick in your bundle. 
Just enter this command and try serving your site again. 
```console
bundle add webrick
bundle exec jekyll serve
```
If you are still facing any issues, I strongly encourage you to google and find yourself a remedy! Make no mistake, Googling is also an Art.

#### 4. Making the Site Truly *Yours* {#step-4}
Let's personalize our site. Open the *_config.yml* file in your root directory. Take a look at the file, you'll find a lot of extra comments which we will choose to ignore for now but you should read them (It's there for a reason).

```yaml
title: Your awesome title #title of your page
email: your-email@example.com #your email id
description: >- #description of your blog
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: jekyllrb #your twitter username
github_username: jekyll #your github username
```

Add and fill in all the relevant details to your site in this file. For example, my example blog's _config.yml file looks like
```yaml
title: Example Blog
email: anirudh_p@outlook.com
description: >- # this means to ignore newlines until "baseurl:"
  A very nice description!
twitter_username: idonthaveone
github_username:  ani-poroorkara
baseurl: "/examplejekyllblog/" 
url: "https://ani-poroorkara.github.io/"
``` 

#### 5. Pushing your Blog to GitHub {#step-5}
This is the part that requires you to have some or at the least basic knowledge about Git commands or GitHub. 
The easiest way to quickly push a repository to git is 
1. Create a *public* repository. The repository **needs to be public** if you want to host your page for your audience.
2. As soon as you create the repository, GitHub takes you to the quick setup page. Simply, copy paste the shown commands in your command prompt.
This is an example of my quick setup commands.
```console
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/ani-poroorkara/examplejekyllblog.git
git push -u origin master
```
3. Done!

#### 6. Deploy your Blog on Github Pages {#step-6}
Just three more steps to go and your blog is going to be live! Woohoooo!!!
1. Open your repository and go to *Settings*.<br>
My URL: https://github.com/ani-poroorkara/examplejekyllblog/settings

2. Select the *Pages* option. Select the source as "Master" and the folder should be the default value "/(root)" and select *Save*. 

3. You should receive a pop-up saying "Your site is published at <https://ani-poroorkara.github.io/examplejekyllblog/>"

Head on to the URL and take in your hard work!

#### 7. Understanding the file structure {#step-7}
Before writing and publishing our interesting thoughts, let's quickly understand the structure of Jekyll. 
1. **_posts** <br>
This is where we will add our numerous interesting posts. We will discuss this in more details after 2 minutes. 
2. **_site** <br>
This is your site that is generated. This is auto generated by Jekyll so you can ignore it. 
3. **_config.yml** <br>
We have been through this. Read the comments in the file!
4. **404.html** <br>
This is a simple html file that you can edit. If you anyone tries to access a content is that is not available anymore in your page, this page will be displayed instead.
5. **about.md** <br>
This is the about page in your blog. Edit it and make it about you! It can be accessed at [/about](https://ani-poroorkara.github.io/examplejekyllblog/about/) at your webpage.
6. **index.html** <br>
This is the main page where your created blog posts load. This is also your first page when you visit your blog.

Now let's get to the core part of the blog.

#### 8. Publishing your Post! {#step-8}
So as promised, here we are two minutes later to discuss more about *_posts*. All your posts will be created in this directory. All them will be written in markdown files. 

Markdown files are very simple to understand and even easier to write in. I'll leave some links down below so that you know how to write in markdown.

Jekyll follows a method of naming your post files. It's starts with the date, followed by title where the space is replaced with "-" and ends with the markdown file extension ".md". 
```
yyyy-mm-dd-title-separated-by-space.md
2021-09-05-pushing-new-posts.md
```

Now that our file is created, let's head into the file!
The beginning of your post.md should start with the below block of YAML front matter.

```yaml
---
layout: post
title:  "Welcome to Jekyll!"
date:   2021-09-05 01:05:50 +0530
---
```
The reason we add this block of code is to show Jekyll this is a markdown file that needs to be processed as a post. 

The *layout* decides the layout of your entire page. It's also one of the core reasons why Jekyll blogs are so easy to manage. Different type of pages, have different layouts. For example, the about page of our blog will have layout as "page". We won't be discussing this anymore as this will expand the scope of this post.

*title* and *date* are what they are. I can't simplify this further. 

The rest of the content can be written in markdown as we discussed earlier. The first auto generated post *Welcome to Jekyll!* is a pretty good read for first-timers. So go through the file once and you should be as set as a jelly!

#### 9. Pushing your new post into your Blog {#step-9}
We are almost there!! The last final stage of publishing your post is to push your post onto Github. You guys must be already familiar with this so I'll just leave the code here :)
```console
git add .
git commit -m "Pushing the new post"
git branch -M master
git remote add origin https://github.com/ani-poroorkara/examplejekyllblog.git
git push -u origin master
```
That's it!

#### 10. Done and Dusted!! {#step-10}
Go visit your blog page and the new post should be published!! I'll leave some relevant links that will help you if you wish to learn more or improve on your skill.

1. https://jekyllrb.com/
2. https://pages.github.com/
3. https://treehouse.github.io/installation-guides/windows/jekyll-windows.html
4. https://gist.github.com/brandon1024/14b5f9fcfd982658d01811ee3045ff1e
5. https://jekyllrb.com/docs/structure/

