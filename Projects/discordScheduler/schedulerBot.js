const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const TOKEN = process.env.TOKEN;

// When discord is initialized this code will happen
client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name);

        // List all the channels
        client.channels.cache.forEach((channel) => {
            console.log(` -- ${channel.name} ${channel.type} - ${channel.id}`);
        });


        // Storing Server to generalChannel
        let generalChannel = client.channels.cache.get('789136127688572990');

        // Sending Message
        // generalChannel.send("Test Message!");

        // Posting an image or file to a channel
        const localFileAttachment = new Discord.MessageAttachment('C:/Users/Gamos/Desktop/Coding/JavaScript/JavaScript/Projects/discordScheduler/img/asdasdasd.PNG');
        // generalChannel.send(localFileAttachment);

        // Sending via URL to a file
        const webAttachment = new Discord.MessageAttachment('https://cjgamos.github.io/');
        // generalChannel.send(webAttachment);


    });
});

// When discord recieved a message
client.on('message', (receivedMessage) => {

    // Prevent bot from responding to its own message
    if (receivedMessage.author == client.user) {
        return;
    }

    // Reply whenever someone message on the channel
    // receivedMessage.channel.send("Messaged have been received: " + receivedMessage.content);

    // Tagging a User with a reply
    // receivedMessage.channel.send("Puta ka " + receivedMessage.author.toString() + " tulog ako bitch..");


    // Check if the bot's user was tagged in the message
});

client.login(TOKEN); // Run