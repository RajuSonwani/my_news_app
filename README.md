//Initialize New Project

npm init
This will initialise a new project for you and it’s going to ask you a few questions about your project. The most important one is to give your project a name and then you can just keep pressing enter until the installation is over.


//Dependencies Installation

[x] Body-parser
[x] EJS
[x] Express
[x] Axios

npm install ejs express body-parser dotenv axios
Restarting the local server
Restarting the server automatically would be annoying. To save us some time let’s quickly install Nodemon.

npm install --save-dev nodemon
To setup out application to run with nodemon just add the “start” line under scripts in your package.json file.

  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
Start our local server
To start our application / our local server simply type the following command in the command line:

npm start
Hopefully, everything should be working just fine and you won’t have any errors. Obviously, at this point, we haven’t yet started creating our website. Let’s do that.

Application
Let’s now create our application file. This file will be called app.js and it will sit in the root of our website.
