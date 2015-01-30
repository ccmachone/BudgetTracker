###Install node

Download node from http://nodejs.org/download/ and click next a lot.

###Installing MongoDB on Windows

Download MongoDB MSI installer for your version of windows from
http://www.mongodb.org/downloads

Click next through everything (if you change the install directory, make note of it.  I left it as the default which put everything in "C:\Program Files\MongoDB 2.6 Standard"

Create the data directory for mongodb by typing the following command in windows command prompt.

```
md C:\data\db 
```

Now we need to add "C:\Program Files\MongoDB 2.6 Standard\bin" to your environment variables.  (Control Panel -> System -> Advanced System Settings -> Environment Variables, then edit the path variable by appending ";C:\Program Files\MongoDB 2.6 Standard\bin" to the end of it... Click "ok" buttons to close everything).  If you've done this properly you can open a new cmd prompt and type "mongod --version" and it should output some stuff.

To start mongo type "mongod" from cmd prompt.

###Installing grunt

```
npm install -g grunt-cli
```

###Installing mean.io
```
npm install -g mean-cli
```

###Installing bower
```
npm install -g bower
```

Then run

```
bower install
```

###Running Stuff

Open a command prompt and run mongodb by typing
```
mongod
```

Open a new command prompt and navigate to the budget-tracker repo.  Start the server by typing
```
grunt
```

Now you can open a browser and go to localhost:3000 and it'll be up and running.

###Random tid-bits
For those on windows, if you get an error saying "filename too long" while using git, here's the fix.
```
git config --system core.longpaths true
```