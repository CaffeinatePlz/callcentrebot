const INCOMING_CATEGORY = '796672610468626482';
const ARCHIVED_CATEGORY = '796672646048645150';
const ONLINE_ROLE = '796672434958106668';
const LOGGING_CHANNEL = '796673602405400576';

const Discord = require("discord.js");
const bot = new Discord.Client({
    disableMentions: 'everyone',
    autorun: true
});
//const config = require("./config.json");

bot.on("message", async message => {
	if(message.author.bot) return;
    if(message.content.indexOf("+") !== 0) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    /*
    if (command === "logoff") {
        let role = message.guild.roles.cache.find(r => r.name.toLowerCase() == "online");

        if (!message.member.roles.cache.find(r => r.name.toLowerCase() == "call centre staff")){
            message.channel.send('This command can only be used by a Call Center host team.')
        } else if (!message.member.roles.cache.find(r => r.name.toLowerCase() == "online")) {
            message.channel.send('You do not have this role!');
        } else {
            message.member.roles.remove(role).then(() => {
                message.channel.send("Role removed!");
            }).catch(err => {
                message.channel.send('I was unable to remove the role.');
            });
        }
    }

    if (command === "logon") {
        let role = message.guild.roles.cache.find(r => r.name.toLowerCase() == "online");

        if (!message.member.roles.cache.find(r => r.name.toLowerCase() == "call centre staff")){
            message.channel.send('This command can only be used by a Call Center host team.')
        } else if (message.member.roles.cache.find(r => r.name.toLowerCase() == "online")) {
            message.channel.send('You already have this role!');
        } else {
            message.member.roles.add(role).then(() => {
                message.channel.send("Online role added. You will now be pinged for incoming questions.");
            }).catch(err => {
                message.channel.send('I was unable to add the role.');
            });
        }
    }


    if (command === "endcall") {
        if(message.channel.parentID == INCOMING_CATEGORY){
            message.channel.setParent(ARCHIVED_CATEGORY);
            message.channel.send("Call ended. Any new messages after this will start a new call.")
        } else {
            message.channel.send("This command can only be used in an active call channel.");
        }
    }

    if(command === "startcall") {
        if (parseInt(args[0]) <10000 && parseInt(args[0]) > 0){

            let server = message.guild;
            let channel;

            if(message.channel.parentID == ARCHIVED_CATEGORY){
                channel = message.channel;
                channel.setParent(INCOMING_CATEGORY).catch(console.error);
                channel.overwritePermissions(message.author, {
                    SEND_MESSAGES: true
                })
                    .catch(console.error);
                channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");

            } else if (message.channel.parentID == INCOMING_CATEGORY){
                channel = message.channel;
                channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");

            } else {
                if(server.channels.cache.find(channel => channel.name === args[0])){
                    channel = server.channels.cache.find(channel => channel.name === args[0]);

                    channel.setParent(INCOMING_CATEGORY).then( channel => {
                            channel.createOverwrite(message.author, {
                                VIEW_CHANNEL: true
                            })
                                .then( channel => {
                                    message.channel.send("A call has been started in <#" + channel.id + ">");
                                    channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");

                                })
                        }
                    )


                } else {
                    server.channels.create(args[0], "text")
                        .then(channel =>{
                            channel.setParent(INCOMING_CATEGORY).then( channel => {
                                    channel.createOverwrite(message.author, {
                                        VIEW_CHANNEL: true
                                    })
                                        .then( channel => {
                                            message.channel.send("A call has been started in <#" + channel.id + ">");
                                            channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");

                                        })
                                }
                            )

                        })

                }
            }
            let x;
            let logChannel = message.guild.channels.cache.find(channel => channel.id === LOGGING_CHANNEL);
            logChannel.messages.fetch({ limit: 1 }).then(messages => {
                let lastMessage = messages.first();
                x = parseInt(lastMessage.content) + 1;
                logChannel.send(x);
            });
            logChannel.bulkDelete(1);
        }
        else {
            message.channel.send("Attempt failed, are you entering a valid team number?")
        }

    }
    */

    if(command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }
    

  if (command === ('eval')) {
    if (message.author.id != '338163785082601473' && message.author.id != '326313419613536256')
      return message.reply( "You're not allowed to do that! ");
    try {
      let code = args.join(" ");
      let ev = require('util').inspect(eval(code));
      if (ev.length > 1950) {
         ev = ev.substr(0, 1950);
      }
      message.channel.send("**Input:**```js\n"+code+"```**Eval:**```js\n"+ev+"```")
    } catch(err) {
      message.channel.send('```js\n'+err+"```")
    }
   }
  });


//bot.login(config.token);
bot.login(process.env.BOT_TOKEN);




