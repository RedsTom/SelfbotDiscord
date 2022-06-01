/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all emotes commands, like the mdr, etc...
*/

const BetterMarkdown = require('discord-bettermarkdown');
const markdown = new BetterMarkdown();
const { Client, MessageEmbed, WebEmbed} = require('discord.js-selfbot-v13');
const client = new Client(); 
require('dotenv').config();

async function tg(message, flag)
{
    message.channel.send("https://tenor.com/view/potatoz-netflix-meme-ta-gueule-tg-gif-17392380 ");
}

async function perfect(message, flag)
{
    message.channel.send("https://tenor.com/view/mr-bean-thank-you-perfect-superbe-g%C3%A9nial-gif-16654157");
}

async function feur(message, flag)
{
    message.channel.send("https://tenor.com/view/feur-theobabac-quoi-gif-24294658");
}

async function cringe(message, flag)
{
    message.channel.send("https://tenor.com/view/academy-awards-oscars-chrissy-teigen-cringe-yuck-gif-5134244");
}

async function pff(message, flag)
{
    message.channel.send("https://tenor.com/view/no-way-pfff-gaga-lol-gif-18633881"); 
}

async function wtf(message, flag)
{
    message.channel.send("https://tenor.com/view/wtf-is-going-on-here-confused-reading-it-cant-be-shocked-gif-17571504");
}

async function ntm(message, flag)
{
    message.channel.send("https://tenor.com/view/ntm-nique-ta-mere-fuck-your-mother-doctor-fate-parody-gif-16289013");
}

async function love(message, flag)
{
    message.channel.send("https://tenor.com/view/baby-yoda-cute-love-gif-24697410");
}

async function oups(message, flag)
{
    message.channel.send("https://tenor.com/view/go-away-oops-awkward-big-eyes-gif-16408506");
}

async function lol(message, flag)
{
    message.channel.send("https://tenor.com/view/wow-damn-ok-jesus-relax-gif-15745880");
}

async function mdr(message, flag)
{
    message.channel.send("https://tenor.com/view/spit-take-laugh-lmao-gif-9271200");
}

async function PREFIX_EMOTES(client, message, process)
{
    if (message.content.startsWith(`${process.env.PREFIX_EMOTES}`)) {
        let emotes_flag = message.content.slice(`${process.env.PREFIX_EMOTES}`.length).replace(/^\s+/gm, '');

        emotes_flag == "mdr" ? ( await message.delete(), mdr(message, process) ) : null
        emotes_flag == "lol" ? ( await message.delete(), lol(message, process) ) : null
        emotes_flag == "oups" ? ( await message.delete(), oups(message, process) ) : null
        emotes_flag == "love" ? ( await message.delete(), love(message, process) ) : null
        emotes_flag == "ntm" ? ( await message.delete(), ntm(message, process) ) : null
        emotes_flag == "wtf" ? ( await message.delete(), wtf(message, process) ) : null
        emotes_flag == "pff" ? ( await message.delete(), pff(message, process) ) : null
        emotes_flag == "cringe" ? ( await message.delete(), cringe(message, process) ) : null
        emotes_flag == "feur" ? ( await message.delete(), feur(message, process) ) : null
        emotes_flag == "perfect" ? ( await message.delete(), perfect(message, process) ) : null
        emotes_flag == "tg" ? ( await message.delete(), tg(message, process) ) : null
    }
}


module.exports = { PREFIX_EMOTES };
