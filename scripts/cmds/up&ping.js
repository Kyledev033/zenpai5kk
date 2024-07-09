const { GoatWrapper } = require('fca-liane-utils');
 const axios = require('axios');
const moment = require("moment-timezone");
const manilaTime = moment.tz('Asia/Manila');
const formattedDateTime = manilaTime.format('MMMM D, YYYY h:mm A');

const uptimeFacts = [
"The only limit to our realization of tomorrow will be our doubts of today.","Every day may not be good, but there's something good in every day.","Success is stumbling from failure to failure with no loss of enthusiasm.","The future belongs to those who believe in the beauty of their dreams.","The only way to do great work is to love what you do.","Don't watch the clock; do what it does. Keep going.","The best way to predict the future is to create it.","The journey of a thousand miles begins with one step.","Believe you can and you're halfway there.","Life is 10% what happens to us and 90% how we react to it." 
];

module.exports = {
  config: {
    name: "up&ping",
    version: "1.0",
    author: "Kylepogi",// do not change!!kung ayaw mong ma pwetan. 
    countDown: 5,
    role: 0,
    shortDescription: "Check the bot's Uptime&ping",
    longDescription: "Check the bot's Uptime &ping",
    category: "📡𝗨𝗽𝘁𝗶𝗺𝗲&𝗽𝗶𝗻𝗴📊",
    guide: {en:"{p}ping"}
  },
  onStart: function ({ api, message,event, getLang,args}) {
    const startTime = Date.now();
const formattedTime = manilaTime.format(' h:mm A');

    api.sendMessage("🙃 𝗨𝗽𝘁𝗶𝗺𝗲 & 𝗣𝗶𝗻𝗴....", event.threadID).then((sentMessage) => {
const randomFact = uptimeFacts[Math.floor(Math.random() * uptimeFacts.length)];
 const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
      const endTime = Date.now();
      const botPing = endTime - startTime;
      const apiPing = sentMessage.timestamp - startTime;

      const timeStart = Date.now();

      let pingMessage = `👻𝗣𝗼𝗻𝗴!\n\n┏━━━━━━━━━━━━━━━━┓\n   🤖◉𝗭𝗘𝗣𝗛𝗬𝗥𝗨𝗦 𝗨𝗣𝗧𝗜𝗠𝗘:\n┗━━━━━━━━━━━━━━━━┛\n\n━━━━━━━━━━━━━━━━━━\n📡 𝗨𝗽𝘁𝗶𝗺𝗲: ${hours} 𝗵𝗼𝘂𝗿𝘀\n               ⏰${minutes} 𝗺𝗶𝗻𝘂𝘁𝗲𝘀\n               ⏱${seconds} 𝘀𝗲𝗰𝗼𝗻𝗱
╰┈📈𝗕𝗼𝘁 𝗟𝗮𝘁𝗲𝗻𝗰𝘆: ${botPing}ᵐˢ\n╰┈📊𝗔𝗣𝗜 𝗟𝗮𝘁𝗲𝗻𝗰𝘆: ${apiPing}ᵐˢ\n╰┈📅𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗗𝗮𝘁𝗲:\n         ${now.format('YYYY-MM-DD')}\n╰┈⏰𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗧𝗶𝗺𝗲: 
           ${formattedTime} 
━━━━━━━━━━━━━━━━━━
🟢 𝗨𝗣𝗧𝗜𝗠𝗘 𝗙𝗔𝗖𝗧: ${randomFact}\n `;

      api.sendMessage(`${pingMessage}`, event.threadID, sentMessage.messageID);
    });
  },
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
