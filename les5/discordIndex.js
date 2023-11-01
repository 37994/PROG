const {Client, Events, GatewayIntentBits} = require('discord.js');

const client = new Client ({
    intents: [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

function ClientIsReady(c){
    console.log('logged in as: ' + c.user.tag);
}
function onMessage(message){
    const channel = client.channels.cache.get('1162340530051616828');
    if(message.author.bot == false){
        const content = message.content;
        if(content.startsWith('turbokick')){
            let splitContent = content.split(" ");
            channel.send('im trying to kick' + splitContent[1] + ' but i dont know how');
        }
        
    }
    
}

client.once(Events.ClientReady, ClientIsReady);
client.on(Events.MessageCreate, onMessage)

client.login("MTE1OTc4OTk0MDQxNTEzOTg4MA.GqAJSk.6nOjfY3_LJBnLtgi7cbAdxKUzrweBTj8XCB46U");