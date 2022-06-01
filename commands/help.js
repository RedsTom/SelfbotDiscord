/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all helps commands, for commands explications
*/

const BetterMarkdown = require('discord-bettermarkdown');
const { Client, MessageEmbed, WebEmbed} = require('discord.js-selfbot-v13');
const client = new Client(); 
require('dotenv').config();

async function help_normal(client, message, process)
{
    if (message.content == `${process.env.PREFIX_NORMAL}help`) {
        const markdown_help_general = new BetterMarkdown();
        
        await message.delete()

        markdown_help_general.format('✨ 𝗧𝗢𝗨𝗧𝗘𝗦 𝗟𝗘𝗦 𝗖𝗔𝗧𝗘́𝗚𝗢𝗥𝗜𝗘𝗦 𝗘𝗧 𝗣𝗥𝗘́𝗙𝗜𝗫𝗦 ✨\n', "UNDERLINE", "YELLOW", "DARKBLUE", true);

        markdown_help_general.format(`🆘 · [`, "BOLD", "CYAN", null, false);
        markdown_help_general.format(`${process.env.PREFIX_NORMAL}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 : 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙥𝙧𝙚𝙛𝙞𝙭𝙨\n`, "BOLD", "CYAN", null, true);

        markdown_help_general.format(`💰 · [`, "BOLD", "GRAY", null, false);
        markdown_help_general.format(`${process.env.PREFIX_CRYPTO}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 𝙘𝙧𝙮𝙥𝙩𝙤\n`, "BOLD", "GRAY", null, true);

        markdown_help_general.format(`🤟 · [`, "BOLD", "BLUE", null, false);
        markdown_help_general.format(`${process.env.PREFIX_FUN}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 𝙛𝙪𝙣\n`, "BOLD", "BLUE", null, true);

        markdown_help_general.format(`👨‍💻 · [`, "BOLD", "GREEN", null, false);
        markdown_help_general.format(`${process.env.PREFIX_HACKER}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 𝙝𝙖𝙘𝙠𝙚𝙧\n`, "BOLD", "GREEN", null, true);

        markdown_help_general.format(`😂 · [`, "BOLD", "RED", null, false);
        markdown_help_general.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 𝙚𝙢𝙤𝙩𝙚𝙨\n`, "BOLD", "RED", null, true);

        markdown_help_general.format(`💬 · [`, "BOLD", "WHITE", null, false);
        markdown_help_general.format(`${process.env.PREFIX_PERSO}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 𝙥𝙚𝙧𝙨𝙤\n`, "BOLD", "WHITE", null, true);

        markdown_help_general.format(`❓ · [`, "BOLD", "YELLOW", null, false);
        markdown_help_general.format(`${process.env.PREFIX_INFOS}`, "BOLD", "PINK", null, false);
        markdown_help_general.format(`]𝙝𝙚𝙡𝙥 𝙞𝙣𝙛𝙤𝙨\n`, "BOLD", "YELLOW", null, false);

        message.channel.send(markdown_help_general.toCodeblock());
    }
}

async function help_crypto(client, message, process)
{
    if (message.content == `${process.env.PREFIX_CRYPTO}help`) {
        const markdown_help_crypto = new BetterMarkdown();
        
        await message.delete()

        markdown_help_crypto.format('"💫 𝗧𝗢𝗨𝗧𝗘𝗦 𝗟𝗘𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗖𝗥𝗬𝗣𝗧𝗢𝗦 💫\n', "UNDERLINE", "YELLOW", "DARKBLUE", true);

        markdown_help_crypto.format(`🪙 · [`, "BOLD", "CYAN", null, false);
        markdown_help_crypto.format(`${process.env.PREFIX_CRYPTO}`, "BOLD", "PINK", null, false);
        markdown_help_crypto.format(`]𝙘𝙧𝙮𝙥𝙩𝙤 𝙗𝙩𝙘 : 𝘿𝙤𝙣𝙣𝙚 𝙡𝙖 𝙫𝙖𝙡𝙚𝙪𝙧 𝙙𝙪 𝙗𝙩𝙘`, "BOLD", "CYAN", null, true);

        markdown_help_crypto.format(`💴 · [`, "BOLD", "RED", null, false);
        markdown_help_crypto.format(`${process.env.PREFIX_CRYPTO}`, "BOLD", "PINK", null, false);
        markdown_help_crypto.format(`]𝙘𝙧𝙮𝙥𝙩𝙤 𝙚𝙩𝙝 : 𝘿𝙤𝙣𝙣𝙚 𝙡𝙖 𝙫𝙖𝙡𝙚𝙪𝙧 𝙙𝙚 𝙡'𝙚𝙩𝙝`, "BOLD", "RED", null, true);

        markdown_help_crypto.format(`💵 · [`, "BOLD", "GRAY", null, false);
        markdown_help_crypto.format(`${process.env.PREFIX_CRYPTO}`, "BOLD", "PINK", null, false);
        markdown_help_crypto.format(`]𝙘𝙧𝙮𝙥𝙩𝙤 𝙡𝙩𝙘 : 𝘿𝙤𝙣𝙣𝙚 𝙡𝙖 𝙫𝙖𝙡𝙚𝙪𝙧 𝙙𝙚 𝙡'𝙡𝙩𝙘`, "BOLD", "GRAY", null, true);

        markdown_help_crypto.format(`💶 · [`, "BOLD", "BLUE", null, false);
        markdown_help_crypto.format(`${process.env.PREFIX_CRYPTO}`, "BOLD", "PINK", null, false);
        markdown_help_crypto.format(`]𝙘𝙧𝙮𝙥𝙩𝙤 𝙭𝙧𝙥 : 𝘿𝙤𝙣𝙣𝙚 𝙡𝙖 𝙫𝙖𝙡𝙚𝙪𝙧 𝙙𝙚 𝙡'𝙭𝙧𝙥`, "BOLD", "BLUE", null, true);

        markdown_help_crypto.format(`💷 · [`, "BOLD", "GREEN", null, false);
        markdown_help_crypto.format(`${process.env.PREFIX_CRYPTO}`, "BOLD", "PINK", null, false);
        markdown_help_crypto.format(`]𝙘𝙧𝙮𝙥𝙩𝙤 𝙖𝙙𝙖 : 𝘿𝙤𝙣𝙣𝙚 𝙡𝙖 𝙫𝙖𝙡𝙚𝙪𝙧 𝙙𝙚 𝙡'𝙖𝙙𝙖`, "BOLD", "GREEN", null, true);

        message.channel.send(markdown_help_crypto.toCodeblock());
    }
}

async function help_fun(client, message, process)
{
    if (message.content == `${process.env.PREFIX_FUN}help`) {
        const markdown_help_fun = new BetterMarkdown();
        
        await message.delete()

        markdown_help_fun.format(`🤟 𝗧𝗢𝗨𝗧𝗘𝗦 𝗟𝗘𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗙𝗨𝗡𝗦 🤟\n`, "UNDERLINE", "YELLOW", "DARKBLUE", true);

        markdown_help_fun.format("🏓 · [", "BOLD", "CYAN", null, false);
        markdown_help_fun.format(`${process.env.PREFIX_FUN}`, "BOLD", "PINK", null, false);
        markdown_help_fun.format("]𝙥𝙞𝙣𝙜 : 𝙘𝙝𝙚𝙘𝙠 𝙡𝙖 𝙡𝙖𝙩𝙚𝙣𝙘𝙚", "BOLD", "CYAN", null, true);

        markdown_help_fun.format("📸 · [", "BOLD", "RED", null, false);
        markdown_help_fun.format(`${process.env.PREFIX_FUN}`, "BOLD", "PINK", null, false);
        markdown_help_fun.format("]𝙥𝙞𝙘 <𝙢𝙚𝙣𝙩𝙞𝙤𝙣> : 𝙙𝙤𝙣𝙣𝙚 𝙡𝙖 𝙥𝙥 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙢𝙚𝙣𝙩𝙞𝙤𝙣𝙣𝙚́𝙚", "BOLD", "RED", null, true);

        markdown_help_fun.format("😺 · [", "BOLD", "GRAY", null, false);
        markdown_help_fun.format(`${process.env.PREFIX_FUN}`, "BOLD", "PINK", null, false);
        markdown_help_fun.format("]𝙘𝙖𝙩 : 𝙙𝙤𝙣𝙣𝙚 𝙪𝙣𝙚 𝙥𝙝𝙤𝙩𝙤 𝙙𝙚 𝙘𝙝𝙖𝙩", "BOLD", "GRAY", null, true);

        markdown_help_fun.format("🐶 · [", "BOLD", "BLUE", null, false);
        markdown_help_fun.format(`${process.env.PREFIX_FUN}`, "BOLD", "PINK", null, false);
        markdown_help_fun.format("]𝙙𝙤𝙜 : 𝙙𝙤𝙣𝙣𝙚 𝙪𝙣𝙚 𝙥𝙝𝙤𝙩𝙤 𝙙𝙚 𝙘𝙝𝙞𝙚𝙣", "BOLD", "BLUE", null, true);

        markdown_help_fun.format("😜 · [", "BOLD", "GREEN", null, false);
        markdown_help_fun.format(`${process.env.PREFIX_FUN}`, "BOLD", "PINK", null, false);
        markdown_help_fun.format("]𝙢𝙚𝙢𝙚 : 𝙙𝙤𝙣𝙣𝙚 𝙪𝙣 𝙢𝙚𝙢𝙚", "BOLD", "GREEN", null, true);

        message.channel.send(markdown_help_fun.toCodeblock());
    }
}

async function help_hacker(client, message, process)
{
    if (message.content == `${process.env.PREFIX_HACKER}help`) {
        
        const markdown_help_hacker = new BetterMarkdown();
        
        await message.delete()

        markdown_help_hacker.format(`🛡️ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗗𝗔𝗡𝗚𝗘𝗥𝗘𝗨𝗦𝗘 🛡️ |`, "UNDERLINE", "RED", "DARKBLUE", false);
        markdown_help_hacker.format(` 💻 𝗧𝗢𝗨𝗧𝗘𝗦 𝗟𝗘𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗛𝗔𝗖𝗞𝗘𝗥𝗦 💻\n`, "UNDERLINE", "YELLOW", "DARKBLUE", true);

        markdown_help_hacker.format("🧹 · [", "BOLD", "CYAN", null, false);
        markdown_help_hacker.format(`${process.env.PREFIX_HACKER}`, "BOLD", "PINK", null, false);
        markdown_help_hacker.format("]𝙘𝙡𝙚𝙖𝙧𝙢𝙚 <𝙣𝙤𝙢𝙗𝙧𝙚> : 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙩𝙚𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨", "BOLD", "CYAN", null, true);

        markdown_help_hacker.format("📨 · [", "BOLD", "WHITE", null, false);
        markdown_help_hacker.format(`${process.env.PREFIX_HACKER}`, "BOLD", "PINK", null, false);
        markdown_help_hacker.format("]𝙨𝙥𝙖𝙢 <𝙢𝙚𝙨𝙨𝙖𝙜𝙚> : 𝙨𝙥𝙖𝙢 <𝙢𝙚𝙨𝙨𝙖𝙜𝙚>", "BOLD", "WHITE", null, true);

        markdown_help_hacker.format("📝 · [", "BOLD", "PURPLE", null, false);
        markdown_help_hacker.format(`${process.env.PREFIX_HACKER}`, "BOLD", "PINK", null, false);
        markdown_help_hacker.format("]𝙘𝙥_𝙥𝙥 <𝙢𝙚𝙣𝙩𝙞𝙤𝙣> : 𝙘𝙤𝙥𝙞𝙚 𝙢𝙖 𝙥𝙙𝙥 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙢𝙚𝙣𝙩𝙞𝙤𝙣𝙣𝙚́𝙚 𝙚𝙩 𝙡'𝙖𝙩𝙩𝙧𝙞𝙗𝙪𝙩 | <𝙧𝙚𝙨𝙚𝙩> 𝙥𝙤𝙪𝙧 𝙧𝙚𝙫𝙚𝙣𝙞𝙧 𝙖̀ 𝙡𝙖 𝙥𝙙𝙥 𝙙𝙚 𝙗𝙖𝙨𝙚", "BOLD", "PURPLE", null, true);

        markdown_help_hacker.format("📚 · [", "BOLD", "YELLOW", null, false);
        markdown_help_hacker.format(`${process.env.PREFIX_HACKER}`, "BOLD", "PINK", null, false);
        markdown_help_hacker.format("]𝙘𝙥_𝙪𝙨𝙚𝙧 <𝙢𝙚𝙣𝙩𝙞𝙤𝙣> : 𝙘𝙤𝙥𝙞𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝙫𝙖𝙡𝙚𝙪𝙧𝙨 𝙙𝙚 𝙡'𝙪𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙚𝙩 𝙩𝙚 𝙡'𝙖𝙩𝙩𝙧𝙞𝙗𝙪𝙩 | <𝙧𝙚𝙨𝙚𝙩> 𝙥𝙤𝙪𝙧 𝙧𝙚𝙫𝙚𝙣𝙞𝙧 𝙖 𝙫𝙤𝙩𝙧𝙚 𝙥𝙧𝙤𝙛𝙞𝙡 𝙙𝙚 𝙗𝙖𝙨𝙚", "BOLD", "YELLOW", null, true);

        message.channel.send(markdown_help_hacker.toCodeblock());
    }
}

async function help_emotes(client, message, process)
{
    if (message.content == `${process.env.PREFIX_EMOTES}help`) {

        const markdown_help_emotes = new BetterMarkdown();

        await message.delete()

        markdown_help_emotes.format("🎉 TOUTES LES EMOTES 🎉\n", "BOLD", "YELLLOW", "LIGHTGRAY", true);

        markdown_help_emotes.format("🤣 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙢𝙙𝙧", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("😂 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙡𝙤𝙡", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("🤭 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙤𝙪𝙥𝙨", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("💗 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙡𝙤𝙫𝙚", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("💩 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙣𝙩𝙢", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("🤔 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙬𝙩𝙛", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("🤯 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙥𝙛𝙛", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("🤮 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙘𝙧𝙞𝙣𝙜𝙚", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("💈 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙛𝙚𝙪𝙧", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("💯 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙥𝙚𝙧𝙛𝙚𝙘𝙩", "BOLD", "BLUE", null, true);

        markdown_help_emotes.format("🤫 · [", "BOLD", "BLUE", null, false);
        markdown_help_emotes.format(`${process.env.PREFIX_EMOTES}`, "BOLD", "PINK", null, false);
        markdown_help_emotes.format("]𝙩𝙜", "BOLD", "BLUE", null, true);

        message.channel.send(markdown_help_emotes.toCodeblock());
    }
}

async function help_perso(client, message, process)
{
    if (message.content == `${process.env.PREFIX_PERSO}help`) {

        const markdown_help_perso = new BetterMarkdown();
    
        await message.delete()

        markdown_help_perso.format("🤖 𝙏𝙊𝙐𝙏𝙀𝙎 𝙇𝙀𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙀𝙎 𝙋𝙀𝙍𝙎𝙊 🤖\n", "BOLD", "YELLLOW", "LIGHTGRAY", true);

        markdown_help_perso.format("🖼️ · [", "BOLD", "WHITE", null, false);
        markdown_help_perso.format(`${process.env.PREFIX_PERSO}`, "BOLD", "PINK", null, false);
        markdown_help_perso.format("]𝙖𝙫𝙖𝙩𝙖𝙧 <𝙪𝙧𝙡> : 𝙘𝙝𝙖𝙣𝙜𝙚 𝙡'𝙖𝙫𝙖𝙩𝙖𝙧 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙚𝙣 <𝙪𝙧𝙡>", "BOLD", "WHITE", null, true);

        markdown_help_perso.format("📄 · [", "BOLD", "GRAY", null, false);
        markdown_help_perso.format(`${process.env.PREFIX_PERSO}`, "BOLD", "PINK", null, false);
        markdown_help_perso.format("]𝙗𝙞𝙤 <𝙣𝙚𝙬_𝙗𝙞𝙤> : 𝙘𝙝𝙖𝙣𝙜𝙚 𝙡𝙖 𝙗𝙞𝙤 𝙚𝙣 𝙣𝙚𝙬_𝙗𝙞𝙤", "BOLD", "GRAY", null, true);
    
        markdown_help_perso.format("📊 · [", "BOLD", "RED", null, false);
        markdown_help_perso.format(`${process.env.PREFIX_PERSO}`, "BOLD", "PINK", null, false);
        markdown_help_perso.format("]𝙨𝙩𝙖𝙩𝙪𝙨 <𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀/𝙄𝘿𝙇𝙀/𝘿𝙉𝘿/𝙄𝙉𝙑𝙄𝙎𝙄𝘽𝙇𝙀>", "BOLD", "RED", null, true);
    
        markdown_help_perso.format("🖊️ · [", "BOLD", "GREEN", null, false);
        markdown_help_perso.format(`${process.env.PREFIX_PERSO}`, "BOLD", "PINK", null, false);
        markdown_help_perso.format("]𝙖𝙘𝙩𝙞𝙫𝙞𝙩𝙮 <𝙥𝙡𝙖𝙮𝙞𝙣𝙜|𝙨𝙩𝙧𝙚𝙖𝙢𝙞𝙣𝙜|𝙬𝙖𝙩𝙘𝙝𝙞𝙣𝙜>", "BOLD", "GREEN", null, true);

        markdown_help_perso.format("📈 · [", "BOLD", "BLUE", null, false);
        markdown_help_perso.format(`${process.env.PREFIX_PERSO}`, "BOLD", "PINK", null, false);
        markdown_help_perso.format("]𝙖𝙗𝙤𝙪𝙩𝙢𝙚 <𝙣𝙚𝙬_𝙖𝙗𝙤𝙪𝙩𝙢𝙚> | <𝙧𝙚𝙨𝙚𝙩> 𝙥𝙤𝙪𝙧 𝙧𝙚𝙫𝙚𝙣𝙞𝙧 𝙖̀ 𝙡𝙖 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙥𝙧𝙚́𝙘𝙚́𝙙𝙚𝙣𝙩𝙚", "BOLD", "BLUE", null, true);
    
        message.channel.send(markdown_help_perso.toCodeblock());
    }
}

async function help_infos(client, message, process)
{
    if (message.content == `${process.env.PREFIX_INFOS}help`) {

        await message.delete()

        const markdown_help_infos = new BetterMarkdown();

        markdown_help_infos.format("📝 𝗧𝗢𝗨𝗧𝗘𝗦 𝗟𝗘𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗜𝗡𝗙𝗢𝗦 📝\n", "BOLD", "YELLLOW", "LIGHTGRAY", true);

        markdown_help_infos.format("ℹ️ · [", "BOLD", "CYAN", null, false);
        markdown_help_infos.format(`${process.env.PREFIX_INFOS}`, "BOLD", "PINK", null, false);
        markdown_help_infos.format("]𝙞𝙣𝙛𝙤_𝙨𝙚𝙧𝙫 = 𝙙𝙤𝙣𝙣𝙚 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙨 𝙨𝙪𝙧 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧", "BOTH", "CYAN", null, true);

        markdown_help_infos.format("💁🏻 · [", "BOLD", "GREEN", null, false);
        markdown_help_infos.format(`${process.env.PREFIX_INFOS}`, "BOLD", "PINK", null, false);
        markdown_help_infos.format("] 𝙞𝙣𝙛𝙤_𝙪𝙨𝙚𝙧 <𝙪𝙨𝙚𝙧> = 𝙙𝙤𝙣𝙣𝙚 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙨 𝙨𝙪𝙧 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 <𝙪𝙨𝙚𝙧>", "BOLD", "GREEN", null, true);

        message.channel.send(markdown_help_infos.toCodeblock());
    }
}

async function all_helps(client, message, process)
{
    help_normal(client, message, process); 
    help_crypto(client, message, process);
    help_fun(client, message, process);  
    help_hacker(client, message, process);
    help_emotes(client, message, process);
    help_perso(client, message, process);
    help_infos(client, message, process);
}

module.exports = { all_helps };
