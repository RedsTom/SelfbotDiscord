/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** root of the project, allows to process the received command and to send it to the right function
*/

import dotenv from 'dotenv'
dotenv.config()

let nitroSniper = false
let historique = false

async function checkNitroSniper (client, message, process) {
  if (message.author.id !== client.user.id) return

  const arg = message.content.split(' ')[1]
  if (arg === 'on') {
    if (nitroSniper) {
      await message.channel.send('Nitro Sniper déjà activé')
      return
    }
    nitroSniper = true
    await message.channel.send('Nitro Sniper activé')
    return
  }
  if (arg === 'off') {
    if (!nitroSniper) {
      await message.channel.send('Nitro Sniper déjà désactivé')
      return
    }
    nitroSniper = false
    await message.channel.send('Nitro Sniper désactivé')
  }
  await message.channel.send('Syntaxe : !??? ?? <on|off>')
}

async function checkHistorique (client, message, process) {
  if (message.author.id !== client.user.id) return

  const arg = message.content.split(' ')[1]
  if (arg === 'on') {
    if (historique) {
      await message.channel.send('Historique déjà activé')
      return
    }
    historique = true
    await message.channel.send('Historique activé')
    return
  }
  if (arg === 'off') {
    if (!historique) {
      await message.channel.send('Historique déjà désactivé')
      return
    }
    historique = false
    await message.channel.send('Historique désactivé')
  }
  await message.channel.send('Syntaxe : !??? ?? <on|off>')
}

export default async function PREFIX_ADMIN (client, message, process) {
  if (message.content.startsWith('https://discord.gift/') && nitroSniper) {
    await message.channel.send('<@' + client.user.id + '>')
  }

  if (message.content.startsWith(process.env.PREFIX_ADMIN)) {
    const flagAdmin = message.content.replace(process.env.PREFIX_ADMIN, '')

    if (flagAdmin.startsWith('nitrosniper')) {
      await checkNitroSniper(client, message, process)
    }

    if (flagAdmin.startsWith('historique')) {
      await checkHistorique(client, message, process)
    }
  }
}
