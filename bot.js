const Discord=require('discord.js');
const re = require('readline-sync')
require('dotenv').config()

const bot = new Discord.Client();

const token=process.env.TOKEN

bot.login(token)

let killgifs=['https://i.gifer.com/Lpqq.gif', 'https://i.gifer.com/WaBG.gif', 'https://steamuserimages-a.akamaihd.net/ugc/271722715908279502/7F6E3E9EBBAB19EB513CE51015B7632828C2748E/']

bot.on('ready', () => {

const prefix='A'

  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  console.log(msg.author.username  + ': ' + msg.content)
  if(msg.author.username!=="Robot Assasian"){
    if (msg.content === prefix+'ping') {
       msg.reply('pong');
       msg.channel.send('pong');
    }
    if (msg.content === '*p') {
      sentimg(msg.channel,"discs.png")
    }
    if (msg.content.search(prefix+"kill") !== -1) {
      msg.reply(' killed someone'+killgifs[Math.floor(Math.random() * killgifs.length)]) 
    }
    if (msg.content === '*p') {
      sentimg(msg.channel,"disrdjs.png")
    }
  }
});

const sentimg=(channel,img)=>{
  const exampleEmbed = new Discord.MessageEmbed()
	.attachFiles(['./assets/'+img])
	.setImage('attachment://'+img);

  channel.send(exampleEmbed);
}