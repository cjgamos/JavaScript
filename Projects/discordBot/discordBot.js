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
    let scheduleMessage = new cron.CronJob('00 09 03 * * *', () => {
        let channel = client.channels.cache.get('812327375231647778');
        channel.send('Its a test Word');
    });

    scheduleMessage.start();
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

