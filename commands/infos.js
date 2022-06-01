/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all info's commands, like the help, the invite, etc...
*/

const { Client, MessageEmbed, WebEmbed } = require('discord.js-selfbot-v13');
const client = new Client(); 
require('dotenv').config(); 
const BetterMarkdown = require('discord-bettermarkdown');
const markdown = new BetterMarkdown();

async function info_user(client, message, process)
{

}

async function info_serv(client, message, process)
{

}

async function PREFIX_INFOS(client, message, process)
{

}

module.exports = { PREFIX_INFOS };
