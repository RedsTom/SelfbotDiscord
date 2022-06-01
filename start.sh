##
## MISTROU PROJECT, 2022
## SELFBOT DISCORD
## File description:
## This file is the main script of the bot. If you don't have requirements this script install all for you ;)
## please don't touch it.
##

if [ -d "node_modules" ]; then
    node start.js
else
    echo "installation of packages..."
    npm install discord.js-selfbot-v13@latest; npm i discord-bettermarkdown; npm install dotenv --save; npm install axios ;node start.js
fi