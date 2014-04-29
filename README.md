# Codefellows Javascript Foundations Night Course

## Useful Reading

- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - I re-read this every 3 months. It's fantastic.
- [Prototypical Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Hoisting](http://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092)
- [MDN on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
  - This article really helped me fully understand closures.
- [Async](http://www.slideshare.net/clutchski/writing-asynchronous-javascript-101)
- [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [Front-end Job Interview Questions](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions)
  - Sometimes I'll read through this list and the first thing I don't know I go and learn about it.
- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
- [Career Cup](http://www.careercup.com/page?pid=amazon-interview-questions&sort=comments)

## Ajax Assignment
- [http://rs.hankyates.com:3000/content](http://rs.hankyates.com:3000/content)
- [http://rs.hankyates.com:3000/v2/content](http://rs.hankyates.com:3000/v2/content)

## Git remotes tutorial.

We need to start updating our local repositories with everyone else's changes. We can make this easy on ourselve by using [git's remotes feature](http://git-scm.com/book/en/Git-Basics-Working-with-Remotes). We are going to add this repository as a remote called `upstream`. Run the following command from within your repository:

`git remote add upstream https://github.com/codefellows/sea-c11-javascript.git`

or if you have an ssh key on your github account:

`git remote add upstream git@github.com:codefellows/sea-c11-javascript.git`

Then to merge in everyone else's changes run the following command:

`git pull upstream master`

This command is saying 'go to the Code Fellows repository. get the master branch. pull the master branch down to my local repository. and merge it into my local master branch.'

## Need help?

### Connect to IRC.
There is a #codefellows channel on irc.freenode.net a ton of bootcamp students, Instructors, and generally knowledgable people are in that chat room. Ask for help and I'm sure someone will oblige! 

http://www.irchelp.org/irchelp/new2irc.html

### Start a discussion on canvas.
Hopfully everyone is in canvas now. Be on the lookout to help out people there if you think you can help! Helping each other is the most effective way to figure out some problems!

### Google it.
Seriously though. Before asking questions at least do a google search about the error you are getting.
