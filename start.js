/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** root of the project, allows to process the received command and to send it to the right function
*/

const { Client, MessageEmbed, WebEmbed } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config(); 
const BetterMarkdown = require('discord-bettermarkdown');
const markdown = new BetterMarkdown();

const { all_helps } = require('./commands/help.js');
const { PREFIX_CRYPTO } = require('./commands/crypto.js');
const { PREFIX_FUN } = require('./commands/fun.js');
const { PREFIX_HACKER } = require('./commands/hacker.js');
const { PREFIX_EMOTES } = require('./commands/emotes.js');
const { PREFIX_PERSO } = require('./commands/perso.js');
const { PREFIX_INFOS } = require('./commands/infos.js');
const { NitroState, Colors } = require('discord.js-selfbot-v13/src/util/Constants');

client.on('ready', async () => {
    console.log("\x1b[33m%s\x1b[0m", "                      ╔═════════════════════╗")
    console.log("\x1b[33m                      ║\x1b[0m", "\x1b[32m╔╦╗╦╔═╗╔╦╗╦═╗╔═╗╦ ╦\x1b[0m", "\x1b[33m║\x1b[0m")
    console.log("\x1b[33m                      ║\x1b[0m", "\x1b[32m║║║║╚═╗ ║ ╠╦╝║ ║║ ║\x1b[0m", "\x1b[33m║\x1b[0m")
    console.log("\x1b[33m                      ║\x1b[0m", "\x1b[32m╩ ╩╩╚═╝ ╩ ╩╚═╚═╝╚═╝\x1b[0m", "\x1b[33m║\x1b[0m")
    console.log("\x1b[33m%s\x1b[0m", "                      ╚═════════════════════╝")
    console.log("                   Connecté à", `\x1b[36m${client.user.tag}\x1b[0m`)
    console.log(`               ID de`, `\x1b[35m${client.user.tag}\x1b[0m`, ":", `\x1b[31m${client.user.id}\x1b[0m`)
    console.log(`       Avatar de`, `\x1b[33m${client.user.tag}\x1b[0m`, ":", `\x1b[34m${client.user.avatar}\x1b[36m`)
});

client.on('message', async message => {
    console.log(message.content, message.author.username);
    if (message.author.id != client.user.id) return;
    all_helps(client, message, process);
    PREFIX_CRYPTO(client, message, process);
    PREFIX_FUN(client, message, process);
    PREFIX_HACKER(client, message, process);
    PREFIX_EMOTES(client, message, process);
    PREFIX_PERSO(client, message, process);
    PREFIX_INFOS(client, message, process);
});

client.login(process.env.TOKEN);
