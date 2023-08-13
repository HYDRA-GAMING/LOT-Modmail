const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Odd is better.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "957501569996308482", //put your guild id here
  categoryID: "1126535322210148463", //put your category id here
  staffRole: "1127656268996284548", //put your staff role id here
  embedColor: "#2f3136", //change the hax color code if you want
  anonymousReply: false/true, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Support Ticket Closed",
  closedMessage: "Our Customer Service Representative has closed your ticket!",
  staffOpenedTitle: "Customer has closed the ticket.",
  staffOpenedMessage: "A Customer has made a Support Ticket, please assist them. @everyone",
  userOpenedTitle: "Support Ticket Created!",
  userOpenedMessage: "You have created a support ticket, one of our Customer Service Representatives will shortly assist you.",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
