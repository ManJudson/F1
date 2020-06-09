const Discord = require("discord.js");
const myid = ['Soul Reaper#6900'];
const prefix = ['!'];
const cmd = require("node-cmd")
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
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.login("NzExODQ1NDU3ODMxMjY0MjU2.XsI8Hw.0SxtHgmB0srPQaAxcIZ6N0IiKps");
client2.login("NzExODQ2OTUyOTI4ODA0OTA0.XsI9bg.uWvbtArjEq3J2Yvl8HE40JtQn-w");
client3.login("NzExODQ3NjUwNzMwOTY3MDUx.XsI99g.YrCUDOyJc8CpmpxTNe8SJyciQlc");
client4.login("NzExODQ4MTU2OTQ5OTA1NDA5.XsI-kA.Pzaf3KlO910n7OD1QpXi4UcH4j4");
client5.login("NzExODQ5NDE5NzQ5ODUxMTk5.XsI_jA.zFOsSeZ_Wf5KY5GxplivKI9jkmw");
client6.login("NzExODQ5OTg3MzY1MDExNDU2.XsJALw.XqGpS-5SczsYvyNNWfCVgBCbLBo");
client7.login("NzExODUwNTAwNDMzMzc5NDQw.XsJA3w.7MLzsFqcicIbOn2GG5fJqsfvoAA");
client8.login("NzExODUxMTczNDEzNjUwNDg4.XsJBcQ.cz6exbKtQB-Q0E0ZlBLG37e451U");
client9.login("NzExODUxODU4MjI2MDUzMTQw.XsJCFA.p7xMEYUM9g5DBb7_uAZ_SYixhJg");
client10.login("NzExODUzODE5OTU2Mjk3NzU4.XsJDyA.th1t3Xz6MX70ee-ATlUZBbSI6c0");
client11.login("NzExODU0MzE2NDg2NTI0OTg4.XsJEXg.Cv_OQj27vFJFsFDAMg5CWbubAF8");
client12.login("NzExODU0OTUyMzIyMTcwOTEx.XsJE9Q.2eBzKQlrBl8dn8g8qdw-MXAwZDs");
client13.login("NzExODU2NTc3ODQ1NTI2NTg4.XsJGRA.DTM-9_lkdrPfYVashhIvBpLtKY8");
client14.login("NzExODU3MzE1MDE5NjIwNDUy.XsJGyw.cK5k5WSc88TAdN-SVu4irBqXMlU");
client15.login("NzExODU3NzY0NjM2Mjk1MTY5.XsJHWA.8249_BbXppGsforcLmhylMfWZoQ");
client16.login("NzExODU4MjgyNzE2ODU2MzIx.XsJILw.DUaIX1guhpqX_zZEnYFFLNHYOXk");
client17.login("NzExODU5MDIxNjQwMTA1OTk1.XsJIiw.SaEyTKBe5KKA3D39PySTAV9OKWo");
client18.login("NzExODU5NTQ2Nzk2MDY0ODAw.XsJJPw.ZCbjrNLPyGRW6zmNJz3dAUYHaf4");
client19.login("NzExODYwOTU3NzY0MTI0NzYy.XsJLJA.u4MfHal5lH5mxjp7RgWn5xAlj5U");
client20.login("");


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
  if (message.content === prefix+'d1') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c1'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p1') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s1')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === prefix+'d2') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c2'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p2') {
message.channel.send('#profile')
  }
   if(message.content === prefix+'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s2')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === prefix+'d3') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c3'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p3') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s3')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === prefix+'d4') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c4'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p4') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s4')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === prefix+'d5') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c5'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p5') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s5')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === prefix+'d6') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c6'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p6') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s6')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client7.on('message', message => {
  if (message.content === prefix+'d7') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c7'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p7') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r7'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s7')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client8.on('message', message => {
  if (message.content === prefix+'d8') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c8'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p8') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r8'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s8')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client9.on('message', message => {
  if (message.content === prefix+'d9') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c9'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p9') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r9'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s9')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client10.on('message', message => {
  if (message.content === prefix+'d10') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c10'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p10') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r10'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t10')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client11.on('message', message => {
  if (message.content === prefix+'d11') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c11'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p11') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r11'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t11')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client12.on('message', message => {
  if (message.content === prefix+'d12') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c12'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p12') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r12'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t12')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client13.on('message', message => {
  if (message.content === prefix+'d13') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c13'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p13') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r13'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t13')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client14.on('message', message => {
  if (message.content === prefix+'d14') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c14'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p14') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r14'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t14')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client15.on('message', message => {
  if (message.content === prefix+'d15') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c15'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p15') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r15'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t15')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client16.on('message', message => {
  if (message.content === prefix+'d16') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c16'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p16') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r16'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t16')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client17.on('message', message => {
  if (message.content === prefix+'d17') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c17'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p17') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r17'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t17')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client18.on('message', message => {
  if (message.content === prefix+'d18') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c18'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p18') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r18'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t18')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client19.on('message', message => {
  if (message.content === prefix+'d19') {
message.channel.send('#daily')
  }19
  if(message.content === prefix+'c19'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p19') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r19'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t19')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client20.on('message', message => {
  if (message.content === prefix+'d20') {
message.channel.send('#daily')
  }19
  if(message.content === prefix+'c20'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p20') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r20'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'t20')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client2.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client3.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client4.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client5.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client6.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client7.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client8.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client9.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client10.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client11.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client12.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client13.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client14.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client15.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client16.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client17.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client18.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client19.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client20.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client7.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client8.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client9.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client10.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client11.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client12.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client13.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client14.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client15.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client16.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client17.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client18.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client19.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client20.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client2.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client3.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client4.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client5.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client6.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client7.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client8.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client9.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client10.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client11.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client12.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client13.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client14.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client15.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client16.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client17.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client18.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client19.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client20.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

client7.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``7`` ")
    }
});

client8.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``8`` ")
    }
});

client9.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``9`` ")
    }
});

client10.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``10`` ")
    }
});

client11.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``11`` ")
    }
});

client12.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``12`` ")
    }
});

client13.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``13`` ")
    }
});

client14.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``14`` ")
    }
});

client15.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``15`` ")
    }
});

client16.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``16`` ")
    }
});

client17.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``17`` ")
    }
});

client18.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``18`` ")
    }
});

client19.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``19`` ")
    }
});

client20.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``20`` ")
    }
});
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ