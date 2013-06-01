# cujoJS coffee seed

CoffeeScript version of [cujoJS seed](https://github.com/cujojs/seed).

This is a starter kit for building [cujoJS](http://cujojs.com) apps in CoffeeScript.

## How to get started

1. `git clone https://github.com/deciob/cujojs-coffee-seed.git <project-name>`
1. `cd <project-name>`
1. `npm install`
1. `npm start`
1. Open http://localhost:8000/ in your browser
1. `jitter coffee app -b`
1. Open your editor and start coding

## Using the built-in server with another port

The included server, [serv](https://github.com/scothis/serv) is set to port
8000 by default.  You can change it to 1337, for instance, with the following
steps:

1. Open "package.json".
1. Find the section "scripts".
1. Change the "start" item to use port 1337.
	1. It should look like this: `"start": "serv --port 1337"`.

[serv](https://github.com/scothis/serv) has other options, as well.
