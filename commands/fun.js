/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all fun's commands, like the ping, etc...
*/

import axios from 'axios'
import dotoenv from 'dotenv'
dotoenv.config()

async function meme (client, message, process) {
  axios.get('https://some-random-api.ml/meme').then(reponse => {
    message.channel.send(reponse.data.image)
  })
}

async function dog (client, message, process) {
  axios.get('https://api.thedogapi.com/v1/images/search').then(reponse => {
    message.channel.send(reponse.data[0].url)
  })
}

async function cat (client, message, process) {
  axios.get('https://api.thecatapi.com/v1/images/search').then(reponse => {
    message.channel.send(reponse.data[0].url)
  })
}

async function pic (client, message, process) {
  const user = message.mentions.users.first()

  await message.delete()

  user ? await message.channel.send(user.displayAvatarURL()) : await message.channel.send("I can't find this user.")
}

async function ping (client, message, process) {
  const messageTestPing = await message.channel.send('Ping test...')
  await messageTestPing.edit(`✅ Latence: ${messageTestPing.createdTimestamp - message.createdTimestamp}ms.`)
}

const tests = [
  {
    test: a => a === 'ping',
    run: ping
  },
  {
    test: a => a.startsWith('pic'),
    run: pic
  },
  {
    test: a => a === 'cat',
    run: cat
  },
  {
    test: a => a === 'dog',
    run: dog
  },
  {
    test: a => a === 'meme',
    run: meme
  }
]

export default async function PREFIX_FUN (client, message, process) {
  if (message.content.startsWith(`${process.env.PREFIX_FUN}`)) {
    const funFlag = message.content.replace(`${process.env.PREFIX_FUN}`, '')

    tests.filter(a => a.test(funFlag))
      .forEach(a => a.run(client, message, process))
  }
}
