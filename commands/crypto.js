/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all crypto's commands, like the prize of bitcoin or the price of ethereum, etc...
*/

const BetterMarkdown = require('discord-bettermarkdown');
const { Client, MessageEmbed, WebEmbed, MessageAttachment} = require('discord.js-selfbot-v13');
const client = new Client();
const axios = require('axios');
require('dotenv').config();

let value_btc = 0;
let value_eth = 0;
let value_ltc = 0;
let value_xrp = 0;
let value_ada = 0;

async function ada(client, message, process)
{
    const markdown_ada = new BetterMarkdown()

    await axios.get("https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD,EUR,GBP,CHF,AUD,RUB").then(r => {

        if (value_ada <= r.data.USD) {
            value_ada = r.data.USD;
            markdown_ada.format(`📈 Prix du Cardano en USD: ${r.data.USD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ada.format(`📈 Prix du Cardano en EUR: ${r.data.EUR}€`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ada.format(`📈 Prix du Cardano en GBP: ${r.data.GBP}£`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ada.format(`📈 Prix du Cardano en CHF: ${r.data.CHF}Fr`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ada.format(`📈 Prix du Cardano en AUD: ${r.data.AUD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ada.format(`📈 Prix du Cardano en RUB: ${r.data.RUB}₽`, "BOLD", "GREEN", "DARKBLUE", true)
        } else {
            markdown_ada.format(`📉 Prix du Cardano en USD: ${r.data.USD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ada.format(`📉 Prix du Cardano en EUR: ${r.data.EUR}€`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ada.format(`📉 Prix du Cardano en GBP: ${r.data.GBP}£`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ada.format(`📉 Prix du Cardano en CHF: ${r.data.CHF}Fr`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ada.format(`📉 Prix du Cardano en AUD: ${r.data.AUD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ada.format(`📉 Prix du Cardano en RUB: ${r.data.RUB}₽`, "BOLD", "RED", "DARKBLUE", true)  
        }
    })
    await message.channel.send("https://images.squarespace-cdn.com/content/v1/551ddcb9e4b0d9e1728a296d/1536878221362-67ZF87XNBI0WW37QFCED/cardano_logo_zoom3.gif");
    message.channel.send(markdown_ada.toCodeblock());
}

async function xrp(client, message, process)
{
    const markdown_xrp = new BetterMarkdown()

    await axios.get("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR,GBP,CHF,AUD,RUB").then(r => {

        if (value_xrp <= r.data.USD) {
            value_xrp = r.data.USD;
            markdown_xrp.format(`📈 Prix de l'XRP en USD: ${r.data.USD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_xrp.format(`📈 Prix de l'XRP en EUR: ${r.data.EUR}€`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_xrp.format(`📈 Prix de l'XRP en GBP: ${r.data.GBP}£`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_xrp.format(`📈 Prix de l'XRP en CHF: ${r.data.CHF}Fr`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_xrp.format(`📈 Prix de l'XRP en AUD: ${r.data.AUD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_xrp.format(`📈 Prix de l'XRP en RUB: ${r.data.RUB}₽`, "BOLD", "GREEN", "DARKBLUE", true)
        } else {
            markdown_xrp.format(`📉 Prix de l'XRP en USD: ${r.data.USD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_xrp.format(`📉 Prix de l'XRP en EUR: ${r.data.EUR}€`, "BOLD", "RED", "DARKBLUE", true)
            markdown_xrp.format(`📉 Prix de l'XRP en GBP: ${r.data.GBP}£`, "BOLD", "RED", "DARKBLUE", true)
            markdown_xrp.format(`📉 Prix de l'XRP en CHF: ${r.data.CHF}Fr`, "BOLD", "RED", "DARKBLUE", true)
            markdown_xrp.format(`📉 Prix de l'XRP en AUD: ${r.data.AUD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_xrp.format(`📉 Prix de l'XRP en RUB: ${r.data.RUB}₽`, "BOLD", "RED", "DARKBLUE", true)  
        }
    })
    await message.channel.send("https://i0.wp.com/www.xrparcade.com/wp-content/uploads/2020/06/xrptransfer-img.gif?resize=300%2C300&ssl=1");
    message.channel.send(markdown_xrp.toCodeblock());
}

async function ltc(client, message, process)
{
    const markdown_ltc = new BetterMarkdown()

    await axios.get("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,GBP,CHF,AUD,RUB").then(r => {

        if (value_ltc <= r.data.USD) {
            value_ltc = r.data.USD;
            markdown_ltc.format(`📈 Prix du Litecoin en USD: ${r.data.USD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ltc.format(`📈 Prix du Litecoin en EUR: ${r.data.EUR}€`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ltc.format(`📈 Prix du Litecoin en GBP: ${r.data.GBP}£`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ltc.format(`📈 Prix du Litecoin en CHF: ${r.data.CHF}Fr`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ltc.format(`📈 Prix du Litecoin en AUD: ${r.data.AUD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_ltc.format(`📈 Prix du Litecoin en RUB: ${r.data.RUB}₽`, "BOLD", "GREEN", "DARKBLUE", true)
        } else {
            markdown_ltc.format(`📉 Prix du Litecoin en USD: ${r.data.USD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ltc.format(`📉 Prix du Litecoin en EUR: ${r.data.EUR}€`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ltc.format(`📉 Prix du Litecoin en GBP: ${r.data.GBP}£`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ltc.format(`📉 Prix du Litecoin en CHF: ${r.data.CHF}Fr`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ltc.format(`📉 Prix du Litecoin en AUD: ${r.data.AUD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_ltc.format(`📉 Prix du Litecoin en RUB: ${r.data.RUB}₽`, "BOLD", "RED", "DARKBLUE", true)  
        }
    })
    await message.channel.send("https://discover.luno.com/wp-content/uploads/BLOG_LTC_ANNOUNCE.gif");
    message.channel.send(markdown_ltc.toCodeblock());
}

async function eth(client, message, process)
{
    const markdown_eth = new BetterMarkdown()

    await axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,GBP,CHF,AUD,RUB").then(r => {

        if (value_eth <= r.data.USD) {
            value_eth = r.data.USD;
            markdown_eth.format(`📈 Prix de l'Ethereum en USD: ${r.data.USD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_eth.format(`📈 Prix de l'Ethereum en EUR: ${r.data.EUR}€`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_eth.format(`📈 Prix de l'Ethereum en GBP: ${r.data.GBP}£`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_eth.format(`📈 Prix de l'Ethereum en CHF: ${r.data.CHF}Fr`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_eth.format(`📈 Prix de l'Ethereum en AUD: ${r.data.AUD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_eth.format(`📈 Prix de l'Ethereum en RUB: ${r.data.RUB}₽`, "BOLD", "GREEN", "DARKBLUE", true)
        } else {
            markdown_eth.format(`📉 Prix de l'Ethereum en USD: ${r.data.USD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_eth.format(`📉 Prix de l'Ethereum en EUR: ${r.data.EUR}€`, "BOLD", "RED", "DARKBLUE", true)
            markdown_eth.format(`📉 Prix de l'Ethereum en GBP: ${r.data.GBP}£`, "BOLD", "RED", "DARKBLUE", true)
            markdown_eth.format(`📉 Prix de l'Ethereum en CHF: ${r.data.CHF}Fr`, "BOLD", "RED", "DARKBLUE", true)
            markdown_eth.format(`📉 Prix de l'Ethereum en AUD: ${r.data.AUD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_eth.format(`📉 Prix de l'Ethereum en RUB: ${r.data.RUB}₽`, "BOLD", "RED", "DARKBLUE", true)  
        }
    })
    await message.channel.send("https://c.tenor.com/Q5e7EFiLLVMAAAAC/ethereum.gif");
    message.channel.send(markdown_eth.toCodeblock());
}

async function btc(client, message, process)
{
    const markdown_btc = new BetterMarkdown()

    await axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,GBP,CHF,AUD,RUB").then(r => {

        if (value_btc <= r.data.USD) {
            value_btc = r.data.USD;
            markdown_btc.format(`📈 Prix du Bitcoin en USD: ${r.data.USD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_btc.format(`📈 Prix du Bitcoin en EUR: ${r.data.EUR}€`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_btc.format(`📈 Prix du Bitcoin en GBP: ${r.data.GBP}£`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_btc.format(`📈 Prix du Bitcoin en CHF: ${r.data.CHF}Fr`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_btc.format(`📈 Prix du Bitcoin en AUD: ${r.data.AUD}$`, "BOLD", "GREEN", "DARKBLUE", true)
            markdown_btc.format(`📈 Prix du Bitcoin en RUB: ${r.data.RUB}₽`, "BOLD", "GREEN", "DARKBLUE", true)
        } else {
            markdown_btc.format(`📉 Prix du Bitcoin en USD: ${r.data.USD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_btc.format(`📉 Prix du Bitcoin en EUR: ${r.data.EUR}€`, "BOLD", "RED", "DARKBLUE", true)
            markdown_btc.format(`📉 Prix du Bitcoin en GBP: ${r.data.GBP}£`, "BOLD", "RED", "DARKBLUE", true)
            markdown_btc.format(`📉 Prix du Bitcoin en CHF: ${r.data.CHF}Fr`, "BOLD", "RED", "DARKBLUE", true)
            markdown_btc.format(`📉 Prix du Bitcoin en AUD: ${r.data.AUD}$`, "BOLD", "RED", "DARKBLUE", true)
            markdown_btc.format(`📉 Prix du Bitcoin en RUB: ${r.data.RUB}₽`, "BOLD", "RED", "DARKBLUE", true)  
        }
    })
    await message.channel.send("https://c.tenor.com/y0SIaspW0E8AAAAd/cyberhornet-nest.gif");
    message.channel.send(markdown_btc.toCodeblock());
}

async function PREFIX_CRYPTO(client, message, process)
{
    if (message.content.startsWith(`${process.env.PREFIX_CRYPTO}crypto`)) {
        let flag_crypto = message.content.split(" ")[1];

        flag_crypto == "btc" ? ( await message.delete(), btc(client, message, process) ) : null;
        flag_crypto == "eth" ? ( await message.delete(), eth(client, message, process) ) : null;
        flag_crypto == "ltc" ? ( await message.delete(), ltc(client, message, process) ) : null;
        flag_crypto == "xrp" ? ( await message.delete(), xrp(client, message, process) ) : null;
        flag_crypto == "ada" ? ( await message.delete(), ada(client, message, process) ) : null;
    }
}

module.exports = { PREFIX_CRYPTO };
