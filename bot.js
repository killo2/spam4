const Discord = require("discord.js");
const myid = ['723416290005614652'];
const prefix = ['$'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.on('message', message => {
  if (message.content === 'd1') {
message.channel.send('#daily')
  }
  if(message.content === 'c1'){
message.channel.send('#credits')
  }
  if(message.content === 'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p1') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === 'd2') {
message.channel.send('#daily')
  }
  if(message.content === 'c2'){
message.channel.send('#credits')
  }
   if(message.content === 'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p2') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === 'd3') {
message.channel.send('#daily')
  }
  if(message.content === 'c3'){
message.channel.send('#credits')
  }
  if(message.content === 'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p3') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === 'd4') {
message.channel.send('#daily')
  }
  if(message.content === 'c4'){
message.channel.send('#credits')
  }
  if(message.content === 'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p4') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === 'd5') {
message.channel.send('#daily')
  }
  if(message.content === 'c5'){
message.channel.send('#credits')
  }
  if(message.content === 'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p5') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === 'd6') {
message.channel.send('#daily')
  }
  if(message.content === 'c6'){
message.channel.send('#credits')
  }
  if(message.content === 'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p6') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client7.on('message', message => {
  if (message.content === 'd7') {
message.channel.send('#daily')
  }
  if(message.content === 'c7'){
message.channel.send('#credits')
  }
  if(message.content === 'r7'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p7') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s7")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client8.on('message', message => {
  if (message.content === 'd8') {
message.channel.send('#daily')
  }
  if(message.content === 'c8'){
message.channel.send('#credits')
  }
  if(message.content === 'r8'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p8') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s8")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client9.on('message', message => {
  if (message.content === 'd9') {
message.channel.send('#daily')
  }
  if(message.content === 'c9'){
message.channel.send('#credits')
  }
  if(message.content === 'r9'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p9') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s9")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client10.on('message', message => {
  if (message.content === 'd10') {
message.channel.send('#daily')
  }
  if(message.content === 'c10'){
message.channel.send('#credits')
  }
  if(message.content === 'r10'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p10') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s10")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client7.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client8.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client9.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client10.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
