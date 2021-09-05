const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.login(config.token);

// Log stats-bot in to the server and set status
bot.on("ready", async () => {
console.log(`${bot.user.username} is displaying stats...`)

// Configurations
const guild = bot.guilds.get('PASTE_ID'); // ID of server
const totalUsers = bot.channels.get('PASTE_ID'); // ID of total users channel
const onlineUsers = bot.channels.get('PASTE_ID'); // ID of online users channel
const roles = bot.channels.get('PASTE_ID'); // ID of certain roles channel 

var userCount = guild.memberCount;
var onlineCount = guild.members.filter(m => m.presence.status === 'online').size
var coderCount = guild.roles.get('PASTE_ID').members.size; // ID of certain roles

// Check every X seconds for changes
setInterval(function() {
  console.log('Updating stats!')
  
  // Log counts for debugging
  console.log("Total Users: " + userCount);
  console.log("Online Users: " + onlineCount);
  console.log("Coders: " + coderCount);

  // Set channel names
  totalUsers.setName("Total Users: " + userCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  onlineUsers.setName("Online Users: " + onlineCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  roles.setName("Coders: " + coderCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  }, 10000)

});



