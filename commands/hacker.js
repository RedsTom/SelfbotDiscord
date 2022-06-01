/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all hacker's commands, clearme, spam etc...
*/

const BetterMarkdown = require('discord-bettermarkdown');
const markdown = new BetterMarkdown();
const { Client, MessageEmbed, WebEmbed} = require('discord.js-selfbot-v13');
require('dotenv').config();

let save_user = [];
let user_are_save = false;
let save_pp = "";
let pp_are_save = false;

async function cp_user(client, message, process)
{
    let user_to_copie = message.mentions.users.first();

    await message.delete();

    if (message.content.split(" ")[1] == "reset") {
        if (save_user.length == 0 || user_are_save == false)
            return message.channel.send("Vous n'avez pas de save récente.");
        try {
            client.user.setUsername(save_user[0], process.env.MDP)
            client.user.setDiscriminator(save_user[1], process.env.MDP)
            client.user.setAboutMe(save_user[2])
            client.user.setAvatar(save_user[3])
            client.user.setBanner(save_user[4])
            const message_save = await message.channel.send("Votre compte a été réinitialisé.");
        } catch (e) {
            console.log(e);
            const copie = message.channel.send("Une erreur est survenue.");
        }
        await setTimeout(() => { message_save.delete(), copie.delete() }, 2500);
        return;
    }
    if (!user_to_copie)
        return message.channel.send("Veuillez indiquer un utilisateur.");
    if (user_are_save == false) {
        save_user.push(client.user.username, client.user.discriminator, (await client.user.getProfile()).bio,  client.user.avatarURL(), client.user.bannerURL());
        user_are_save = true;
    }
    const all_is_set = await message.channel.send(`✅ Sauvegarde de votre compte.`);
    const chargement_en_cours = await message.channel.send("Copie en cours...");
    await setTimeout(() => { all_is_set.delete(), chargement_en_cours.delete() }, 2500);
    try {
        await client.user.setUsername(user_to_copie.username, process.env.MDP);
        await client.user.setAboutMe((await user_to_copie.getProfile()).bio);
        await client.user.setAvatar(user_to_copie.avatarURL());
        await client.user.setBanner(user_to_copie.bannerURL());
    } catch (e) {
        console.log(e);
        return message.channel.send("Une erreur est survenue lors de la copie du compte.");
    }
}

async function cp_pp(client, message, process)
{
    let pp_to_copie = message.mentions.users.first();

    await message.delete();

    if (message.content.split(" ")[1] == "reset") {
        if (save_pp.length == 0 || pp_are_save == false)
            return message.channel.send("Vous n'avez pas de save récente.");
        client.user.setAvatar(save_pp);
        const message_save = await message.channel.send("Votre avatar a été réinitialisé.");
        await setTimeout(() => { message_save.delete() }, 2500);
        return;
    }
    if (!pp_to_copie)
        return message.channel.send("Veuillez indiquer un utilisateur.");
    if (pp_are_save == false) {
        save_pp = await client.user.avatarURL();
        pp_are_save = true;
        const all_is_set = await message.channel.send(`✅ Sauvegarde de votre avatar.`);
        await setTimeout(() => { all_is_set.delete() }, 2500);
    }
    const chargement_en_cours = await message.channel.send("Copie en cours...");
    await setTimeout(() => { chargement_en_cours.delete() }, 2500);
    try {
        await client.user.setAvatar(pp_to_copie.displayAvatarURL());
    } catch (e) {
        console.log(e);
        return message.channel.send("Une erreur est survenue lors de la copie de l'avatar.");
    }
}

async function spam(client, message, process)
{
    let a_spam = message.content.split(" ")[1];

    await message.delete();

    if (!a_spam)
        return message.channel.send("Veuillez indiquer un message à envoyer.");

    while (1) { message.channel.send(a_spam); }
}

async function clearme(client, message, process)
{
    let args = message.content.split(" ");

    await message.delete()

    if (!args[1] || isNaN(parseInt(args[1])))
        return message.channel.send("Veuillez indiquer un nombre de messages à supprimer.");

    await (await message.channel.messages.fetch({ limit: parseInt(args[1])})).filter((msg) => msg.author.id == client.user.id).forEach(m => m.delete());
    const all_is_delete = await message.channel.send(`✅ Suppression de ${args[1]} messages.`);
    await setTimeout(() => { all_is_delete.delete() }, 2500);
}

async function PREFIX_HACKER(client, message, process)
{
    if (message.content.startsWith(`${process.env.PREFIX_HACKER}`)) {
        let hacker_flag = message.content.replace(`${process.env.PREFIX_HACKER}`, "");

        hacker_flag.startsWith("clearme") ? ( clearme(client, message, process) ): null
        hacker_flag.startsWith("spam") ? ( spam(client, message, process) ): null
        hacker_flag.startsWith("cp_pp") ? ( cp_pp(client, message, process) ): null
        hacker_flag.startsWith("cp_user") ? ( cp_user(client, message, process) ): null
    }
}

module.exports = { PREFIX_HACKER };