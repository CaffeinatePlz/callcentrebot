const INCOMING_CATEGORY = '796672610468626482';
const ARCHIVED_CATEGORY = '796672646048645150';
const ONLINE_ROLE = '796672434958106668';
const LOGGING_CHANNEL = '796673602405400576';

const Discord = require("discord.js");
const bot = new Discord.Client({
    disableMentions: 'everyone',
    autorun: true
});
const config = require("./config.json");

bot.on("message", async message => {
	if(message.author.bot) return;
    if(message.content.indexOf("+") !== 0) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if(command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }
 
});


bot.login(config.token);
//bot.login(process.env.BOT_TOKEN);




