const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("554823917747961860")
setInterval(function() {
channel.send(`hi toddy wyh mony monymony mony mony yes`);
}, 30)
})

client.login(process.env.BOT_TOKEN);