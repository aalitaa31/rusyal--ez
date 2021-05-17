const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const config = require("../ayarlar.json");

var prefix = config.prefix;

module.exports = client => {

    console.log(`
${client.user.username} İsmi ile giriş yapıldı.
`)
    client.user.setStatus("online");


    client.user.setActivity(`Ossi was here!`);
  
    let kanal = client.channels.cache.get(config.botseskanalı)
    if (kanal) {
        kanal.join()
    } else {
        console.log('kanala bağlanamadım.')
    }
};