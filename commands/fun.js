/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all fun's commands, like the ping, etc...
*/

const { default: axios } = require('axios');
const BetterMarkdown = require('discord-bettermarkdown');
const markdown = new BetterMarkdown();
const { Client, MessageEmbed, WebEmbed} = require('discord.js-selfbot-v13');
const client = new Client(); 
require('dotenv').config(); 

async function meme(client, message, process)
{
    axios.get("https://some-random-api.ml/meme").then(reponse => {
        message.channel.send(reponse.data.image);  
    });
}

async function dog(client, message, process)
{
    axios.get("https://api.thedogapi.com/v1/images/search").then(reponse => {
        message.channel.send(reponse.data[0].url);
    });
}

async function cat(client, message, process)
{
    axios.get("https://api.thecatapi.com/v1/images/search").then(reponse => {
        message.channel.send(reponse.data[0].url);
    });
}

async function pic(client, message, process)
{
    let user = message.mentions.users.first();

    await message.delete()

    user ? await message.channel.send(user.displayAvatarURL()) : await message.channel.send("I can't find this user.");
}

async function ping(client, message, process)
{
    let message_test_ping = await message.channel.send("Ping test...");
    await message_test_ping.edit(`✅ Latence: ${message_test_ping.createdTimestamp - message.createdTimestamp}ms.`);
}

async function PREFIX_FUN(client, message, process)
{
    if (message.content.startsWith(`${process.env.PREFIX_FUN}`)) {
        let fun_flag = message.content.replace(`${process.env.PREFIX_FUN}`, "");

        fun_flag == "ping" ? ( await message.delete(), ping(client, message, process) ): null
        fun_flag.startsWith(`pic`) ? ( pic(client, message, process) ): null
        fun_flag == "cat" ? ( await message.delete(), cat(client, message, process) ): null
        fun_flag == "dog" ? ( await message.delete(), dog(client, message, process) ): null
        fun_flag == "meme" ? ( await message.delete(), meme(client, message, process) ): null
    }
}

module.exports = { PREFIX_FUN };
