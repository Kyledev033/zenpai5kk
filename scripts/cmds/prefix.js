 const axios = require('axios');
const moment = require("moment-timezone");
const manilaTime = moment.tz('Asia/Manila');
const formattedDateTime = manilaTime.format('MMMM D, YYYY h:mm A');
const moment = require("moment-timezone");
const minecraftFacts = [
   	"𝘐𝘵'𝘴 𝘯𝘰𝘵 𝘢𝘣𝘰𝘶𝘵 𝘣𝘦𝘪𝘯𝘨 𝘵𝘩𝘦 𝘣𝘦𝘴𝘵, 𝘪𝘵'𝘴 𝘢𝘣𝘰𝘶𝘵 𝘣𝘦𝘪𝘯𝘨 𝘣𝘦𝘵𝘵𝘦𝘳 𝘵𝘩𝘢𝘯 𝘺𝘰𝘶 𝘸𝘦𝘳𝘦 𝘺𝘦𝘴𝘵𝘦𝘳𝘥𝘢𝘺.", "𝘊𝘰𝘶𝘳𝘢𝘨𝘦 𝘪𝘴 𝘯𝘰𝘵 𝘵𝘩𝘦 𝘢𝘣𝘴𝘦𝘯𝘤𝘦 𝘰𝘧 𝘧𝘦𝘢𝘳, 𝘣𝘶𝘵 𝘳𝘢𝘵𝘩𝘦𝘳 𝘵𝘩𝘦 𝘫𝘶𝘥𝘨𝘮𝘦𝘯𝘵 𝘵𝘩𝘢𝘵 𝘴𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨 𝘦𝘭𝘴𝘦 𝘪𝘴 𝘮𝘰𝘳𝘦 𝘪𝘮𝘱𝘰𝘳𝘵𝘢𝘯𝘵 𝘵𝘩𝘢𝘯 𝘧𝘦𝘢𝘳.", "𝘠𝘰𝘶 𝘥𝘰𝘯'𝘵 𝘥𝘦𝘷𝘦𝘭𝘰𝘱 𝘤𝘰𝘶𝘳𝘢𝘨𝘦 𝘣𝘺 𝘣𝘦𝘪𝘯𝘨 𝘩𝘢𝘱𝘱𝘺 𝘪𝘯 𝘺𝘰𝘶𝘳 𝘳𝘦𝘭𝘢𝘵𝘪𝘰𝘯𝘴𝘩𝘪𝘱𝘴 𝘦𝘷𝘦𝘳𝘺𝘥𝘢𝘺. 𝘠𝘰𝘶 𝘥𝘦𝘷𝘦𝘭𝘰𝘱 𝘪𝘵 𝘣𝘺 𝘴𝘶𝘳𝘷𝘪𝘷𝘪𝘯𝘨 𝘥𝘪𝘧𝘧𝘪𝘤𝘶𝘭𝘵 𝘵𝘪𝘮𝘦𝘴 𝘢𝘯𝘥 𝘤𝘩𝘢𝘭𝘭𝘦𝘯𝘨𝘪𝘯𝘨 𝘢𝘥𝘷𝘦𝘳𝘴𝘪𝘵𝘺.", "𝘊𝘰𝘶𝘳𝘢𝘨𝘦 𝘪𝘴 𝘸𝘩𝘢𝘵 𝘪𝘵 𝘵𝘢𝘬𝘦𝘴 𝘵𝘰 𝘴𝘵𝘢𝘯𝘥 𝘶𝘱 𝘢𝘯𝘥 𝘴𝘱𝘦𝘢𝘬; 𝘤𝘰𝘶𝘳𝘢𝘨𝘦 𝘪𝘴 𝘢𝘭𝘴𝘰 𝘸𝘩𝘢𝘵 𝘪𝘵 𝘵𝘢𝘬𝘦𝘴 𝘵𝘰 𝘴𝘪𝘵 𝘥𝘰𝘸𝘯 𝘢𝘯𝘥 𝘭𝘪𝘴𝘵𝘦𝘯.", "𝘠𝘰𝘶 𝘤𝘢𝘯'𝘵 𝘣𝘶𝘪𝘭𝘥 𝘢 𝘳𝘦𝘱𝘶𝘵𝘢𝘵𝘪𝘰𝘯 𝘰𝘯 𝘸𝘩𝘢𝘵 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘨𝘰𝘪𝘯𝘨 𝘵𝘰 𝘥𝘰.",  "𝘛𝘩𝘦 𝘰𝘯𝘭𝘺 𝘱𝘦𝘳𝘴𝘰𝘯 𝘺𝘰𝘶 𝘴𝘩𝘰𝘶𝘭𝘥 𝘵𝘳𝘺 𝘵𝘰 𝘣𝘦 𝘣𝘦𝘵𝘵𝘦𝘳 𝘵𝘩𝘢𝘯 𝘪𝘴 𝘵𝘩𝘦 𝘱𝘦𝘳𝘴𝘰𝘯 𝘺𝘰𝘶 𝘸𝘦𝘳𝘦 𝘺𝘦𝘴𝘵𝘦𝘳𝘥𝘢𝘺.",  "𝘠𝘰𝘶 𝘢𝘳𝘦 𝘯𝘦𝘷𝘦𝘳 𝘵𝘰𝘰 𝘰𝘭𝘥 𝘵𝘰 𝘴𝘦𝘵 𝘢𝘯𝘰𝘵𝘩𝘦𝘳 𝘨𝘰𝘢𝘭 𝘰𝘳 𝘵𝘰 𝘥𝘳𝘦𝘢𝘮 𝘢 𝘯𝘦𝘸 𝘥𝘳𝘦𝘢𝘮.",  "𝘍𝘢𝘪𝘵𝘩 𝘪𝘴 𝘵𝘩𝘦 𝘴𝘶𝘣𝘴𝘵𝘢𝘯𝘤𝘦 𝘰𝘧 𝘵𝘩𝘪𝘯𝘨𝘴 𝘩𝘰𝘱𝘦𝘥 𝘧𝘰𝘳, 𝘵𝘩𝘦 𝘦𝘷𝘪𝘥𝘦𝘯𝘤𝘦 𝘰𝘧 𝘵𝘩𝘪𝘯𝘨𝘴 𝘯𝘰𝘵 𝘴𝘦𝘦𝘯.", "𝘍𝘢𝘪𝘵𝘩 𝘪𝘴 𝘵𝘢𝘬𝘪𝘯𝘨 𝘵𝘩𝘦 𝘧𝘪𝘳𝘴𝘵 𝘴𝘵𝘦𝘱 𝘦𝘷𝘦𝘯 𝘸𝘩𝘦𝘯 𝘺𝘰𝘶 𝘥𝘰𝘯'𝘵 𝘴𝘦𝘦 𝘵𝘩𝘦 𝘸𝘩𝘰𝘭𝘦 𝘴𝘵𝘢𝘪𝘳𝘤𝘢𝘴𝘦.", "𝘈 𝘴𝘪𝘯𝘨𝘭𝘦 𝘢𝘤𝘵 𝘰𝘧 𝘬𝘪𝘯𝘥𝘯𝘦𝘴𝘴 𝘵𝘩𝘳𝘰𝘸𝘴 𝘰𝘶𝘵 𝘳𝘰𝘰𝘵𝘴 𝘪𝘯 𝘢𝘭𝘭 𝘥𝘪𝘳𝘦𝘤𝘵𝘪𝘰𝘯𝘴, 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘳𝘰𝘰𝘵𝘴 𝘴𝘱𝘳𝘪𝘯𝘨 𝘶𝘱 𝘢𝘯𝘥 𝘮𝘢𝘬𝘦 𝘯𝘦𝘸 𝘵𝘳𝘦𝘦𝘴.",  "𝘛𝘩𝘦 𝘣𝘦𝘴𝘵 𝘸𝘢𝘺 𝘵𝘰 𝘧𝘪𝘯𝘥 𝘺𝘰𝘶𝘳𝘴𝘦𝘭𝘧 𝘪𝘴 𝘵𝘰 𝘭𝘰𝘴𝘦 𝘺𝘰𝘶𝘳𝘴𝘦𝘭𝘧 𝘪𝘯 𝘵𝘩𝘦 𝘴𝘦𝘳𝘷𝘪𝘤𝘦 𝘰𝘧 𝘰𝘵𝘩𝘦𝘳𝘴.",  "𝘒𝘪𝘯𝘥𝘯𝘦𝘴𝘴 𝘪𝘴 𝘵𝘩𝘦 𝘭𝘢𝘯𝘨𝘶𝘢𝘨𝘦 𝘸𝘩𝘪𝘤𝘩 𝘵𝘩𝘦 𝘥𝘦𝘢𝘧 𝘤𝘢𝘯 𝘩𝘦𝘢𝘳 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘣𝘭𝘪𝘯𝘥 𝘤𝘢𝘯 𝘴𝘦𝘦." , "𝘉𝘦 𝘬𝘪𝘯𝘥, 𝘧𝘰𝘳 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦 𝘺𝘰𝘶 𝘮𝘦𝘦𝘵 𝘪𝘴 𝘧𝘪𝘨𝘩𝘵𝘪𝘯𝘨 𝘢 𝘩𝘢𝘳𝘥 𝘣𝘢𝘵𝘵𝘭𝘦."
];
const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: "Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot)",
		category: "config",
		guide: {
			vi: "   {pn} <new prefix>: thay đổi prefix mới trong box chat của bạn"
				+ "\n   Ví dụ:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: thay đổi prefix mới trong hệ thống bot (chỉ admin bot)"
				+ "\n   Ví dụ:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: thay đổi prefix trong box chat của bạn về mặc định",
			en: "   {pn} <new prefix>: change new prefix in your box chat"
				+ "\n   Example:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: change new prefix in system bot (only admin bot)"
				+ "\n   Example:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: change prefix in your box chat to default"
		}
	},

	langs: {
		vi: {
			reset: "Đã reset prefix của bạn về mặc định: %1",
			onlyAdmin: "Chỉ admin mới có thể thay đổi prefix hệ thống bot",
			confirmGlobal: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix của toàn bộ hệ thống bot",
			confirmThisThread: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix trong nhóm chat của bạn",
			successGlobal: "Đã thay đổi prefix hệ thống bot thành: %1",
			successThisThread: "Đã thay đổi prefix trong nhóm chat của bạn thành: %1",
			myPrefix: "🌐 Prefix của hệ thống: %1\n🛸 Prefix của nhóm bạn: %2"
		},
		en: {
			reset: "Your prefix has been reset to default: %1",
			onlyAdmin: "Only admin can change prefix of system bot",
			confirmGlobal: "Please react to this message to confirm change prefix of system bot",
			confirmThisThread: "Please react to this message to confirm change prefix in your box chat",
			successGlobal: "Changed prefix of system bot to: %1",
			successThisThread: "Changed prefix in your box chat to: %1",
			myPrefix: " [𓃵]—𝗭𝗘𝗣𝗛𝗬𝗥𝗨𝗦 𝗣𝗥𝗘𝗙𝗜𝗫 𝗜𝗦:\n      ➣ 𝗕𝗼𝘁 𝗽𝗿𝗲𝗳𝗶𝘅: 『 %1 』\n    ➢ 𝗬𝗼𝘂𝗿 𝗯𝗼𝘅 𝗰𝗵𝗮𝘁 𝗽𝗿𝗲𝗳𝗶𝘅:『 %2 』\n    𝗢𝘄𝗻𝗲𝗿&𝗔𝗱𝗺𝗶𝗻:『 https://www.facebook.com/kyledev03 』\n       ࿇══━━━━✥◈✥━━━━══ ࿇\n    📅 | ⏰ Date And Time: \n     ${formattedDateTime} ࿇══━━━━✥◈✥━━━━══ ࿇\n 📍𝗥𝗔𝗡𝗗𝗢𝗠 𝗙𝗔𝗖𝗧: ${randomFact}"
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0])
			return message.SyntaxError();

		if (args[0] == 'reset') {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}
const randomFact = minecraftFacts[Math.floor(Math.random() * minecraftFacts.length)];
		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "-g")
			if (role < 2)
				return message.reply(getLang("onlyAdmin"));
			else
				formSet.setGlobal = true;
		else
			formSet.setGlobal = false;

		return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author)
			return;
		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}
		else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "prefix")
			return () => {
				return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
			};
	}
};
