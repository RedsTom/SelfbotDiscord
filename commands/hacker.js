/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all hacker's commands, clearme, spam etc...
*/

import dotenv from 'dotenv'
dotenv.config()

const saveUser = []
let userAreSave = false
let savePp = ''
let ppAreSave = false

async function cpUser (client, message, process) {
  const userToCopie = message.mentions.users.first()

  await message.delete()

  if (message.content.split(' ')[1] === 'reset') {
    if (saveUser.length === 0 || userAreSave === false) { return message.channel.send("Vous n'avez pas de save récente.") }
    try {
      await client.user.setUsername(saveUser[0], process.env.MDP)
      await client.user.setDiscriminator(saveUser[1], process.env.MDP)
      await client.user.setAboutMe(saveUser[2])
      await client.user.setAvatar(saveUser[3])
      await client.user.setBanner(saveUser[4])
      return await message.channel.send('Votre compte a été réinitialisé.')
    } catch (e) {
      console.log(e)
      return await message.channel.send('Une erreur est survenue.')
    }
  }
  if (!userToCopie) { return message.channel.send('Veuillez indiquer un utilisateur.') }
  if (userAreSave === false) {
    saveUser.push(client.user.username, client.user.discriminator, (await client.user.getProfile()).bio, client.user.avatarURL(), client.user.bannerURL())
    userAreSave = true
  }
  const allIsSet = await message.channel.send('✅ Sauvegarde de votre compte.')
  const chargementEnCours = await message.channel.send('Copie en cours...')
  await setTimeout(() => {
    allIsSet.delete()
    chargementEnCours.delete()
  }, 2500)

  try {
    await client.user.setUsername(userToCopie.username, process.env.MDP)
    await client.user.setAboutMe((await userToCopie.getProfile()).bio)
    await client.user.setAvatar(userToCopie.avatarURL())
    await client.user.setBanner(userToCopie.bannerURL())
  } catch (e) {
    console.log(e)
    return message.channel.send('Une erreur est survenue lors de la copie du compte.')
  }
}

async function cpPp (client, message, process) {
  const ppToCopie = message.mentions.users.first()

  await message.delete()

  if (message.content.split(' ')[1] === 'reset') {
    if (savePp.length === 0 || ppAreSave === false) { return message.channel.send("Vous n'avez pas de save récente.") }
    client.user.setAvatar(savePp)
    const messageSave = await message.channel.send('Votre avatar a été réinitialisé.')
    await setTimeout(() => { messageSave.delete() }, 2500)
    return
  }
  if (!ppToCopie) { return message.channel.send('Veuillez indiquer un utilisateur.') }
  if (ppAreSave === false) {
    savePp = await client.user.avatarURL()
    ppAreSave = true
    const allIsSet = await message.channel.send('✅ Sauvegarde de votre avatar.')
    await setTimeout(() => { allIsSet.delete() }, 2500)
  }
  const loading = await message.channel.send('Copie en cours...')
  await setTimeout(() => { loading.delete() }, 2500)
  try {
    await client.user.setAvatar(ppToCopie.displayAvatarURL())
  } catch (e) {
    console.log(e)
    return message.channel.send("Une erreur est survenue lors de la copie de l'avatar.")
  }
}

async function spam (client, message, process) {
  const aSpam = message.content.split(' ')[1]

  await message.delete()

  if (!aSpam) { return message.channel.send('Veuillez indiquer un message à envoyer.') }

  while (true) { message.channel.send(aSpam) }
}

async function clearme (client, message, process) {
  const args = message.content.split(' ')

  await message.delete()

  if (!args[1] || isNaN(parseInt(args[1]))) { return message.channel.send('Veuillez indiquer un nombre de messages à supprimer.') }

  await (await message.channel.messages.fetch({ limit: parseInt(args[1]) })).filter((msg) => msg.author.id === client.user.id).forEach(m => m.delete())
  const allIsDelete = await message.channel.send(`✅ Suppression de ${args[1]} messages.`)
  await setTimeout(() => { allIsDelete.delete() }, 2500)
}

const tests = [
  {
    test: a => a.startsWith('clearme'),
    run: clearme
  },
  {
    test: a => a.startsWith('spam'),
    run: spam
  },
  {
    test: a => a.startsWith('cp_pp'),
    run: cpPp
  },
  {
    test: a => a.startsWith('cp_user'),
    run: cpUser
  }
]

export default async function PREFIX_HACKER (client, message, process) {
  if (message.content.startsWith(`${process.env.PREFIX_HACKER}`)) {
    const hackerFlag = message.content.replace(`${process.env.PREFIX_HACKER}`, '')

    tests.filter(a => a.test(hackerFlag))
      .forEach(a => a.run(client, message, process))
  }
}
