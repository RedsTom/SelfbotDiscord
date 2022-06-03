/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all perso's commands, like change name, the avatar, etc...
*/

import dotenv from 'dotenv'
dotenv.config()

let saveAboutMe = []
let intAboutMe = 0

async function aboutme (client, message, process) {
  let aboutMeMessage = message.content.replace(`${process.env.PREFIX_PERSO}aboutme`, '')

  await message.delete()

  if (!aboutMeMessage || !aboutMeMessage.startsWith(' ')) {
    const newBio = await message.channel.send('Veuillez indiquer une nouvelle bio.')
    await setTimeout(() => { newBio.delete() }, 2500)
    return
  }

  if (aboutMeMessage.length > 2000) {
    const tooLongMessage = await message.channel.send('Votre bio est trop longue.')
    await setTimeout(() => { tooLongMessage.delete() }, 2500)
    return
  }

  aboutMeMessage = aboutMeMessage.replace(' ', '')

  if (aboutMeMessage === 'reset') {
    if (saveAboutMe.length === 0 || intAboutMe === 0) { return message.channel.send("Vous n'avez pas de save récente.") }
    await client.user.setAboutMe(saveAboutMe[--intAboutMe])
    saveAboutMe = saveAboutMe.filter(about => about !== saveAboutMe[intAboutMe])
    const messageSave = await message.channel.send('Votre bio a été réinitialisée.')
    await setTimeout(() => { messageSave.delete() }, 2500)
    return
  }

  saveAboutMe.push(await (await client.user.getProfile()).bio)
  intAboutMe++
  client.user.setAboutMe(aboutMeMessage)
  const allIsSet = await message.channel.send(`✅ Bio modifiée en **${aboutMeMessage}**.`)
  await setTimeout(() => { allIsSet.delete() }, 2500)
}

async function activity (client, message, process) {
  const activityFlag = message.content.split(' ')[1]

  await message.delete()

  if (!activityFlag) { return message.channel.send('Veuillez indiquer une nouvelle activité.') }

  await client.user.setActivity(activityFlag, { type: 'PLAYING' })
  const allIsSet = await message.channel.send(`✅ Activité modifiée en ${activityFlag}.`)
  await setTimeout(() => { allIsSet.delete() }, 2500)
}

async function status (client, message, process) {
  const statusFlag = message.content.split(' ')[1].toUpperCase()

  await message.delete()

  if (!statusFlag) { return message.channel.send('Veuillez indiquer un nouveau status.') }

  if (['AVAILABLE', 'DND', 'IDLE', 'INVISIBLE'].includes(statusFlag)) {
    await client.user.setStatus({ status: statusFlag })
    const allIsSet = await message.channel.send(`✅ Status modifié en ${statusFlag}.`)
    await setTimeout(() => { allIsSet.delete() }, 2500)
  } else { return message.channel.send('Veuillez indiquer un status valide.') }
}

async function bio (client, message, process) {
  const bioFlag = message.content.split(' ')[1]

  await message.delete()

  if (!bioFlag) { return message.channel.send('Veuillez indiquer une nouvelle bio.') }

  await client.user.setPresence({ activity: { name: bioFlag } })
  const allIsSet = await message.channel.send(`✅ Bio modifiée en ${bioFlag}.`)
  await setTimeout(() => { allIsSet.delete() }, 2500)
}

async function avatar (client, message, process) {
  const avatarFlag = message.content.split(' ')[1]

  await message.delete()

  if (!avatarFlag) { return message.channel.send('Veuillez indiquer une nouvelle image.') }

  await client.user.setAvatar(avatarFlag)
  const allIsSet = await message.channel.send(`✅ Avatar modifié en ${avatarFlag}.`)
  await setTimeout(() => { allIsSet.delete() }, 2500)
}

const tests = [
  {
    test: a => a.startsWith('avatar'),
    run: avatar
  },
  {
    test: a => a.startsWith('bio'),
    run: bio
  },
  {
    test: a => a.startsWith('status'),
    run: status
  },
  {
    test: a => a.startsWith('activity'),
    run: activity
  },
  {
    test: a => a.startsWith('aboutme'),
    run: aboutme
  }
]

export default async function PREFIX_PERSO (client, message, process) {
  if (message.content.startsWith(process.env.PREFIX_PERSO)) {
    const persoFlag = message.content.slice(`${process.env.PREFIX_PERSO}`.length).replace(/^\s+/gm, '')

    // // persoFlag.startsWith('banner') ? (banner(client, message, process)) : null
    tests.filter(a => a.test(persoFlag))
      .forEach(a => a.run(client, message, process))
  }
}
