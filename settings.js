/*
Credit Pairing NdXz
Sc by : Deku Ganz

Sc Remake By Leoxzyy
Di Fix ulang oleh : HiraaXz

Subscribe Yt : HiraaXz
My Ch : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
*/

const fs = require('fs');
const chalk = require('chalk');

// NO YANG MAU DI PAIRING
global.nopairing = "6285774671135"

//owmner v card
global.ytname = "Youtube : Ryuitsme" //ur yt chanel name
global.socialm = "IG : -" //ur github or insta name
global.location = "Tokyo" //ur location

global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autorecord = false
global.autoswview = false //auto status/story view
global.autoread = false
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
global.pesanon = false //show pesan on bot

global.ftreply = [
"https://i.ibb.co.com/9NqgmnD/Kawaii.jpg",
"https://i.ibb.co.com/BG4Vs1b/FOLLOW-ME-FOR-MORE-RAW-ICONS-Icons-Anime-Anime-Icons-Aesthetic-PFP-Anime-Anime-Girl-Waifu-Chunnib-sh.jpg",
"https://i.ibb.co.com/bBn6p2c/b78fe1a7-2828-4643-aefe-7668f415d72e.jpg",
"https://i.ibb.co.com/9NqgmnD/Kawaii.jpg",
"https://i.ibb.co.com/bBn6p2c/b78fe1a7-2828-4643-aefe-7668f415d72e.jpg"
]

//new
global.botname = 'Ryuubotzz' //ur bot name
global.ownernumber = ['6285774671135'] //ur owner number, dont add more than one
global.ownername = 'RyuuX' //ur owner name
global.ownername2 = 'RyuuX' //ur owner name
global.websitex = "https://nhentai.org/"
global.wagc = ""
global.saluran = ""
global.jidgroupnotif = ''
global.saluran2 = ""
global.jidgroup = ''
global.jidch = ''
global.themeemoji = '🪀'
global.wm = "Ryuubotz"
global.botscript = '' //script link
global.packname = "HiraaBOT"
global.author = "Sticker By | RyuuuMD"
global.creator = "Kepoo@s.whatsapp.net"
global.xprefix = '.'
global.tiktokname = '-' //name tiktok owner
global.tiktokname2 = '-' //name tiktok2 owner
global.tiktokname3 = '-' //name tiktok3 owner
global.linkch = ""
global.linkgc = ""
global.linksosmed = "https://www.youtube.com/@ryuuitsme"
global.version = "v2"

global.premium = ["6285939352076"] // Premium User
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
global.sessionName = 'session'

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://dapxzprib.serverpanell.biz.id"
global.apikey = "ptla_Sp587hIO3tqqah1846RcA7ROxnoKOLHL8zUBzP3bLSL" //ptla
global.capikey = "ptlc_8yJkNNiqnnubdoVLA4G6IrSIQorp1dweMoyvN4Vr7I2" //ptlc


//bot sett
global.typemenu = 'v9' // menu type 'v1' => 'v4'
global.typemenulist = 'v5' // menu type 'v1' => 'v4'
global.typereply = 'v6' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.ftyuta = [
"https://i.ibb.co.com/9NqgmnD/Kawaii.jpg",
]

global.ftsc = [
"https://i.ibb.co.com/bBn6p2c/b78fe1a7-2828-4643-aefe-7668f415d72e.jpg",
]

global.fotofl = [
fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')
]

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 0,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: '*[ ᴇʀʀʀᴏʀ ]* Error',
	nsfw: '*[ ɴsғᴡ ]* Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done',
	loading: '*[ ʟᴏᴀᴅɪɴɢ ]* Please Wait....'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});