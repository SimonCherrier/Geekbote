const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "/";

client.login("NTk0NTI5MDM5OTE0MzY5MDU1.XRdwWg.Uo7NOFNR-LAoM4x-AdHEbveas7E");

client.on("guildmenberAdd", useradd =>{
    useradd.guild.channels.get("594541277362520105").send("Bienvenu " + useradd + " sur GeekTeam pour rejoindre GeekTeam fais : /rules")
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "rules"){
        message.delete(message)
        message.channel.send("regle a venir...")
        message.channel.send("regle a venir...")
        message.channel.send("regle a venir...")
        message.channel.send("regle a venir...")
        message.channel.send("regle a venir...")
        message.channel.send("                 ")
        message.channel.send("Pour accepter les regle fais :/rules accept")
        message.channel.send("Pour refuser les regle fais :/rules deny")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "rules accept"){
        message.delete(message)
        message.member.addRole('535468819682951186')
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "rules deny"){
        message.delete(message)
        message.channel.send("Nous sommes désolé mais pour rejoindre ce serveur vous devez accepter les règles. Merci de bien vouloir les accepter avec la commande /rules accept")   
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "help"){
        message.delete(message)
        message.channel.send("./rules (voir les règles)")
        message.channel.send("./rules accept (accepter les règles)")
        message.channel.send("./rules deny (refuser les regle)")
        message.channel.send("===============================")
        message.channel.send("./ban  [la personne] {raison} (ban a vie des membre)")
        message.channel.send("./unban [la personne] (debannire la personne)")
        message.channel.send("./kick [la personne] (expulser du serveur la personne)")

        
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "ban"){
        message.guild.ban(message.mentions.users.first());
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content.startsWith(prefix + "ban")) {
        message.guild.ban(message.mentions.users.first())
        message.delete(message) 
        message.channel.send("Le joueur a été banni!")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content.startsWith(prefix + "unban")) {
        message.guild.unban(message.mentions.users.first())
        message.delete(message) 
        message.channel.send("Le joueur a été desbanni!")
    }
});



