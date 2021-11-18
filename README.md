# nodekeeper

NodeKeeper - A 30x light weight alternative to nodemon!

nodekeeper is a CLI tool that helps build Node.Js applications by automatically restarting the node application when file changes in the directory are detected.

It does **not** require *any* additional changes to your code during developement. It is a replacement wrapper for `node`. To use `nodekeeper`, replace the word `node` on the command line when executing your script.

> In case you are intrested in a detailed blog post on how I built it, [check it out here](https://www.pankajtanwar.in/blog/have-you-ever-thought-how-nodemon-works-internally-lets-build-our-own-nodemon-in-under-10-minutes)

# Installation


```bash
npm install -g @the2ndfloorguy/nodekeeper
```

And nodekeeper will be installed globally to your system path.

### TODO 

- Kill the sub-process as well to exit
