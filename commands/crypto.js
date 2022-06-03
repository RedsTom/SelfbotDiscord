/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all crypto's commands, like the prize of bitcoin or the price of ethereum, etc...
*/

import BetterMarkdown from 'discord-bettermarkdown'
import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()

let valueBtc = 0
let valueEth = 0
let valueLtc = 0
let valueXrp = 0
let valueAda = 0

async function ada (client, message, process) {
  const markdownAda = new BetterMarkdown()

  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD,EUR,GBP,CHF,AUD,RUB').then(r => {
    if (valueAda <= r.data.USD) {
      valueAda = r.data.USD
      markdownAda.format(`📈 Prix du Cardano en USD: ${r.data.USD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownAda.format(`📈 Prix du Cardano en EUR: ${r.data.EUR}€`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownAda.format(`📈 Prix du Cardano en GBP: ${r.data.GBP}£`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownAda.format(`📈 Prix du Cardano en CHF: ${r.data.CHF}Fr`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownAda.format(`📈 Prix du Cardano en AUD: ${r.data.AUD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownAda.format(`📈 Prix du Cardano en RUB: ${r.data.RUB}₽`, 'BOLD', 'GREEN', 'DARKBLUE', true)
    } else {
      markdownAda.format(`📉 Prix du Cardano en USD: ${r.data.USD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownAda.format(`📉 Prix du Cardano en EUR: ${r.data.EUR}€`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownAda.format(`📉 Prix du Cardano en GBP: ${r.data.GBP}£`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownAda.format(`📉 Prix du Cardano en CHF: ${r.data.CHF}Fr`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownAda.format(`📉 Prix du Cardano en AUD: ${r.data.AUD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownAda.format(`📉 Prix du Cardano en RUB: ${r.data.RUB}₽`, 'BOLD', 'RED', 'DARKBLUE', true)
    }
  })
  await message.channel.send('https://images.squarespace-cdn.com/content/v1/551ddcb9e4b0d9e1728a296d/1536878221362-67ZF87XNBI0WW37QFCED/cardano_logo_zoom3.gif')
  message.channel.send(markdownAda.toCodeblock())
}

async function xrp (client, message, process) {
  const markdownXrp = new BetterMarkdown()

  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR,GBP,CHF,AUD,RUB').then(r => {
    if (valueXrp <= r.data.USD) {
      valueXrp = r.data.USD
      markdownXrp.format(`📈 Prix de l'XRP en USD: ${r.data.USD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownXrp.format(`📈 Prix de l'XRP en EUR: ${r.data.EUR}€`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownXrp.format(`📈 Prix de l'XRP en GBP: ${r.data.GBP}£`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownXrp.format(`📈 Prix de l'XRP en CHF: ${r.data.CHF}Fr`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownXrp.format(`📈 Prix de l'XRP en AUD: ${r.data.AUD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownXrp.format(`📈 Prix de l'XRP en RUB: ${r.data.RUB}₽`, 'BOLD', 'GREEN', 'DARKBLUE', true)
    } else {
      markdownXrp.format(`📉 Prix de l'XRP en USD: ${r.data.USD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownXrp.format(`📉 Prix de l'XRP en EUR: ${r.data.EUR}€`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownXrp.format(`📉 Prix de l'XRP en GBP: ${r.data.GBP}£`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownXrp.format(`📉 Prix de l'XRP en CHF: ${r.data.CHF}Fr`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownXrp.format(`📉 Prix de l'XRP en AUD: ${r.data.AUD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownXrp.format(`📉 Prix de l'XRP en RUB: ${r.data.RUB}₽`, 'BOLD', 'RED', 'DARKBLUE', true)
    }
  })
  await message.channel.send('https://i0.wp.com/www.xrparcade.com/wp-content/uploads/2020/06/xrptransfer-img.gif?resize=300%2C300&ssl=1')
  message.channel.send(markdownXrp.toCodeblock())
}

async function ltc (client, message, process) {
  const markdownLtc = new BetterMarkdown()

  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,GBP,CHF,AUD,RUB').then(r => {
    if (valueLtc <= r.data.USD) {
      valueLtc = r.data.USD
      markdownLtc.format(`📈 Prix du Litecoin en USD: ${r.data.USD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownLtc.format(`📈 Prix du Litecoin en EUR: ${r.data.EUR}€`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownLtc.format(`📈 Prix du Litecoin en GBP: ${r.data.GBP}£`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownLtc.format(`📈 Prix du Litecoin en CHF: ${r.data.CHF}Fr`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownLtc.format(`📈 Prix du Litecoin en AUD: ${r.data.AUD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownLtc.format(`📈 Prix du Litecoin en RUB: ${r.data.RUB}₽`, 'BOLD', 'GREEN', 'DARKBLUE', true)
    } else {
      markdownLtc.format(`📉 Prix du Litecoin en USD: ${r.data.USD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownLtc.format(`📉 Prix du Litecoin en EUR: ${r.data.EUR}€`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownLtc.format(`📉 Prix du Litecoin en GBP: ${r.data.GBP}£`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownLtc.format(`📉 Prix du Litecoin en CHF: ${r.data.CHF}Fr`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownLtc.format(`📉 Prix du Litecoin en AUD: ${r.data.AUD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownLtc.format(`📉 Prix du Litecoin en RUB: ${r.data.RUB}₽`, 'BOLD', 'RED', 'DARKBLUE', true)
    }
  })
  await message.channel.send('https://discover.luno.com/wp-content/uploads/BLOG_LTC_ANNOUNCE.gif')
  message.channel.send(markdownLtc.toCodeblock())
}

async function eth (client, message, process) {
  const markdownEth = new BetterMarkdown()

  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,GBP,CHF,AUD,RUB').then(r => {
    if (valueEth <= r.data.USD) {
      valueEth = r.data.USD
      markdownEth.format(`📈 Prix de l'Ethereum en USD: ${r.data.USD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownEth.format(`📈 Prix de l'Ethereum en EUR: ${r.data.EUR}€`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownEth.format(`📈 Prix de l'Ethereum en GBP: ${r.data.GBP}£`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownEth.format(`📈 Prix de l'Ethereum en CHF: ${r.data.CHF}Fr`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownEth.format(`📈 Prix de l'Ethereum en AUD: ${r.data.AUD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownEth.format(`📈 Prix de l'Ethereum en RUB: ${r.data.RUB}₽`, 'BOLD', 'GREEN', 'DARKBLUE', true)
    } else {
      markdownEth.format(`📉 Prix de l'Ethereum en USD: ${r.data.USD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownEth.format(`📉 Prix de l'Ethereum en EUR: ${r.data.EUR}€`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownEth.format(`📉 Prix de l'Ethereum en GBP: ${r.data.GBP}£`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownEth.format(`📉 Prix de l'Ethereum en CHF: ${r.data.CHF}Fr`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownEth.format(`📉 Prix de l'Ethereum en AUD: ${r.data.AUD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownEth.format(`📉 Prix de l'Ethereum en RUB: ${r.data.RUB}₽`, 'BOLD', 'RED', 'DARKBLUE', true)
    }
  })
  await message.channel.send('https://c.tenor.com/Q5e7EFiLLVMAAAAC/ethereum.gif')
  message.channel.send(markdownEth.toCodeblock())
}

async function btc (client, message, process) {
  const markdownBtc = new BetterMarkdown()

  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,GBP,CHF,AUD,RUB').then(r => {
    if (valueBtc <= r.data.USD) {
      valueBtc = r.data.USD
      markdownBtc.format(`📈 Prix du Bitcoin en USD: ${r.data.USD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownBtc.format(`📈 Prix du Bitcoin en EUR: ${r.data.EUR}€`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownBtc.format(`📈 Prix du Bitcoin en GBP: ${r.data.GBP}£`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownBtc.format(`📈 Prix du Bitcoin en CHF: ${r.data.CHF}Fr`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownBtc.format(`📈 Prix du Bitcoin en AUD: ${r.data.AUD}$`, 'BOLD', 'GREEN', 'DARKBLUE', true)
      markdownBtc.format(`📈 Prix du Bitcoin en RUB: ${r.data.RUB}₽`, 'BOLD', 'GREEN', 'DARKBLUE', true)
    } else {
      markdownBtc.format(`📉 Prix du Bitcoin en USD: ${r.data.USD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownBtc.format(`📉 Prix du Bitcoin en EUR: ${r.data.EUR}€`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownBtc.format(`📉 Prix du Bitcoin en GBP: ${r.data.GBP}£`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownBtc.format(`📉 Prix du Bitcoin en CHF: ${r.data.CHF}Fr`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownBtc.format(`📉 Prix du Bitcoin en AUD: ${r.data.AUD}$`, 'BOLD', 'RED', 'DARKBLUE', true)
      markdownBtc.format(`📉 Prix du Bitcoin en RUB: ${r.data.RUB}₽`, 'BOLD', 'RED', 'DARKBLUE', true)
    }
  })
  await message.channel.send('https://c.tenor.com/y0SIaspW0E8AAAAd/cyberhornet-nest.gif')
  message.channel.send(markdownBtc.toCodeblock())
}

const crypto = {
  btc,
  eth,
  ltc,
  xrp,
  ada
}

export default async function PREFIX_CRYPTO (client, message, process) {
  if (message.content.startsWith(`${process.env.PREFIX_CRYPTO}crypto`)) {
    const flagCrypto = message.content.split(' ')[1]

    const command = crypto[flagCrypto]
    if (command) {
      await command(client, message, process)
      await message.delete()
    }
  }
}
