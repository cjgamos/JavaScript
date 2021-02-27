require('dotenv').config();
const Discord = require('discord.js');
const cron = require('cron');
const client = new Discord.Client();

// function test() {
//     console.log('Hello Suba');
// }

// let time1 = new cron.CronJob('00 03 03 * * *', test);

// time1.start();

client.on('ready', () => {


    // schedule Time For Backwards
    let mondaySchedule = new cron.CronJob('00 30 07 * * *', () => {
        const channel = client.channels.cache.get('767644857732038717');
        const myGuild = client.guilds.cache.get('758138123254890596');
        const vroan9 = myGuild.roles.cache.get('767621936531898378');
        channel.send(`${vroan9} Goodmorning mga Badi!`);
    });

    mondaySchedule.start();
});

// client.on('ready', () => {

//     // Declare the channel server
//     let generalChannel = client.channels.cache.get('812327375231647778');

//     // Bot Name
//     console.log('Connected as ' + client.user.tag);

//     // Server Names
//     client.guilds.cache.forEach((guild) => {
//         console.log("Servers : " + guild.name);
//     });

//     // Channel Names, Type, and ID
//     client.channels.cache.forEach((channel) => {
//         console.log(`Channel : ${channel.name}, Type : ${channel.type}, ID: ${channel.id}`);
//     });
// });

// client.on('message', (receivedMessage) => {
//     if (receivedMessage.author == client.user) {
//         return;
//     }

//     receivedMessage.channel.send('Message recieved: ' + receivedMessage.content);
// });

client.login(process.env.TOKEN);

