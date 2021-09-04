---
layout: post
title: "Create your own FREE Blog!"
categories: HowTo 
subtitle: Create your own free blog within an hour using Jekyll and Github Pages
comments: true
---

### Hiii Guys! You've made it to my first HowTo Series!! <br>This is How to create your own blog in a simple and efficient manner which also happens to be completely FREE! Coincidence? Maybe!

This entire blog is created using the same method so you know it's efficient and capable. We will be using Jekyll to create our blog site and GitHub Pages to host them for free. So let's not waste anymore time and get straight into it!

### What will you require?
1. Just a general idea of HTML. 
2. A good code editor like VS Code.
3. A brief idea on what markdown is and how to write them.
4. Basic usage of GitHub.
4. Sass and CSS if you want to style your page. It's strictly optional so don't sweat it! 

If you aren't aware of some of the topics, worry not! I had no idea about Jekyll before I created this page. Just keep your will to learn high and go through the references I have provided to you throughout this post.

### Stairway to build it
1. [Jekyll](#step-1) 
2. [Github Pages](#step-2) 
3. [Generating your site](#step-3) 
4. [Making the site truly yours](#step-4)
5. [Pushing your blog to GitHub](#step-5)


#### 1. Jekyll {#step-1}
Let's address the elephant on the site... Why Jekyll? Jekyll will help us publish all our posts in a very simple manner. It needs no HTML, no CSS and no complex databases. You will simple be writing in your notepad text file and having a complete writing experience! This was one of my major reasons of choosing Jekyll as I did not want to put in extra effort for this. 

There are many different posts on how to install Jekyll for your OS so I'm not going to be repetitive and bore you. So go on and [install Jekyll]() and let's meet back here to create your site!

#### 2. Github Pages {#step-2}
Github Pages is basically free hostage for any of the projects you have on GitHub. If you don't know what GitHub is, then you probably should get familiar with it cause it's an integral part of publishing our posts. I'll go over the publication of your posts too though I strongly recommend you look into it.

If you already have a GitHub account, there's nothing else to do here or else go ahead and create an account now.

We are all set now! Let's begin with our blog!

#### 3. Generating Your Site {#step-3}
Firstly, create an empty folder and let's name it whatever your website is going to be called. I am going to name it "blog".

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
title: Your awesome title
email: your-email@example.com
description: >- 
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: jekyllrb
github_username: jekyll
```

Add and fill in all the relevant details to your site in this file. For example, my example blog's _config.yml file looks like
```yaml
title: Example Blog
email: anirudh_p@outlook.com
description: >- # this means to ignore newlines until "baseurl:"
  A very nice description!
twitter_username: idonthaveone
github_username:  ani-poroorkara
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






