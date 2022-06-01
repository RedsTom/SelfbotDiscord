/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all perso's commands, like change name, the avatar, etc...
*/

const { Client, MessageEmbed, WebEmbed } = require('discord.js-selfbot-v13');
const client = new Client(); 
require('dotenv').config(); 
const BetterMarkdown = require('discord-bettermarkdown');

let save_aboutme = [];
let int_aboutme = 0;

async function aboutme(client, message, process)
{
    let aboutme_message = message.content.replace(`${process.env.PREFIX_PERSO}aboutme`, '');

    await message.delete();

    if (!aboutme_message || !aboutme_message.startsWith(" ")) {
        const nouvelle_bio = await message.channel.send("Veuillez indiquer une nouvelle bio.");
        await setTimeout(() => { nouvelle_bio.delete() }, 2500);
        return;
    }

    if (aboutme_message.length > 2000) {
        const trop_long = await message.channel.send("Votre bio est trop longue.");
        await setTimeout(() => { trop_long.delete() }, 2500);
        return;
    }

    aboutme_message = aboutme_message.replace(' ', '')

    if (aboutme_message == "reset") {
        if (save_aboutme.length == 0 || int_aboutme == 0)
            return message.channel.send("Vous n'avez pas de save récente.");
        await client.user.setAboutMe(save_aboutme[--int_aboutme]);
        save_aboutme = save_aboutme.filter(about => about != save_aboutme[int_aboutme])
        const message_save = await message.channel.send("Votre bio a été réinitialisée.");
        await setTimeout(() => { message_save.delete() }, 2500);
        return;
    }

    save_aboutme.push(await (await client.user.getProfile()).bio)
    int_aboutme++;
    client.user.setAboutMe(aboutme_message);
    const all_is_set = await message.channel.send(`✅ Bio modifiée en **${aboutme_message}**.`);
    await setTimeout(() => { all_is_set.delete() }, 2500);
}

async function activity(client, message, process)
{
    let activity_flag = message.content.split(" ")[1];

    await message.delete();

    if (!activity_flag)
        return message.channel.send("Veuillez indiquer une nouvelle activité.");

    await client.user.setActivity(activity_flag, { type: "PLAYING" });
    const all_is_set = await message.channel.send(`✅ Activité modifiée en ${activity_flag}.`);
    await setTimeout(() => { all_is_set.delete() }, 2500);
}

async function status(client, message, process)
{
    let status_flag = message.content.split(" ")[1].toUpperCase();

    await message.delete();

    if (!status_flag)
        return message.channel.send("Veuillez indiquer un nouveau status.");

    if (status_flag == "AVAILABLE" || status_flag == "IDLE" || status_flag == "DND" || status_flag == "INVISIBLE") {
        await client.user.setStatus({ status: status_flag });
        const all_is_set = await message.channel.send(`✅ Status modifié en ${status_flag}.`);
        await setTimeout(() => { all_is_set.delete() }, 2500);
    } else
        return message.channel.send("Veuillez indiquer un status valide.");
}

async function bio(client, message, process)
{
    let bio_flag = message.content.split(" ")[1];

    await message.delete();

    if (!bio_flag)
        return message.channel.send("Veuillez indiquer une nouvelle bio.");

    await client.user.setPresence({ activity: { name: bio_flag } });
    const all_is_set = await message.channel.send(`✅ Bio modifiée en ${bio_flag}.`);
    await setTimeout(() => { all_is_set.delete() }, 2500);
}

async function avatar(client, message, process)
{
    let avatar_flag = message.content.split(" ")[1];

    await message.delete();

    if (!avatar_flag)
        return message.channel.send("Veuillez indiquer une nouvelle image.");

    await client.user.setAvatar(avatar_flag);
    const all_is_set = await message.channel.send(`✅ Avatar modifié en ${avatar_flag}.`);
    await setTimeout(() => { all_is_set.delete() }, 2500);
}

async function PREFIX_PERSO(client, message, process)
{
    if (message.content.startsWith(process.env.PREFIX_PERSO)) {
        let perso_flag = message.content.slice(`${process.env.PREFIX_PERSO}`.length).replace(/^\s+/gm, '');

        perso_flag.startsWith("avatar") ? ( avatar(client, message, process) ): null
        perso_flag.startsWith("banner") ? ( banner(client, message, process) ): null
        perso_flag.startsWith("bio") ? ( bio(client, message, process) ): null
        perso_flag.startsWith("status") ? ( status(client, message, process) ): null
        perso_flag.startsWith("activity") ? ( activity(client, message, process) ): null
        perso_flag.startsWith("aboutme") ? ( aboutme(client, message, process) ): null
    }
}

module.exports = { PREFIX_PERSO };
