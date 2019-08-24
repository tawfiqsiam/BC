const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Star Codes');
console.log(`Logged in as ${client.user.tag}!`);
   console.log('')
client.user.setActivity("-help",{type: 'watching'})
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message',async message => {
  if(message.author.bot || message.channel.type === '-bc1') return;
  let args = message.content.split(' ');
  if(args[0] === `-bc`) {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **please add your text after the command**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・Sent**\n**- [ :inbox_tray: :: ${successCount} ] ・Reserved **\n**- [ :outbox_tray: :: ${errorCount} ]・Blocked **`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・Sent**\n**- [ :inbox_tray: :: ${successCount} ] ・Reserved **\n**- [ :outbox_tray: :: ${errorCount} ]・Blocked **`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・Sent**\n**- [ :inbox_tray: :: ${successCount} ] ・Reserved **\n**- [ :outbox_tray: :: ${errorCount} ]・Blocked**`);
        });
      });
    });
  }
});

var prefix = "-";

  client.on("message", message => {
            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("SEND_MESSAGES"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : Sent to`); 
 message.delete(); 
};     
});


      msg.channel.send({embed:embed});
    }
  });
///Server
client.on('message', function(msg) {
if(msg.content.startsWith ('g!Server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:**Sērvèr Typē**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':trident:** __Rǎnks__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__Númběr Thē  Mémběrs__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__Nūmbêr ǒf Mēmběrs  ónlīnè__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Rǒóms Typīng__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':speaking_head:**__Ròóms Vōicē__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__Ownèr __**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ID Sèrvèr__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ Sērvér Frǒm This timě__**:tools:',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

               client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('-abc')){
                if (message.author.id !== '535544621514883093') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });


client.login(process.env.BOT_TOKEN);
