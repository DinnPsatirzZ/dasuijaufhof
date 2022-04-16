let { fetchBuffer, fetchUrl } = require("../../lib/Function")
let { wallpaper } = require("../../lib/Scraper")

module.exports = {
    name: "wallpaper",
    alias: [],
    desc: "Search Wallpaper from https://www.besthdwallpaper.com",
    type: "search",
    example: "Example : %prefix%command dinxyz",
    exec: async(dinxyz, m, { text, command, toUpper }) => {
        global.mess("wait", m)
        if (!text) return m.reply(`Example : ${prefix + command} dinxyz Zoldyck`)
        let fetch = await wallpaper(text)
        let random = fetch[Math.floor(Math.random() * fetch.length)]
        let buttons = [
            {buttonId: `wallpaper ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: random.image[0] },
            caption: `Search Wallpaper Query : ${toUpper(text)}`,
            footer: `Powered By https://zenzapi.xyz`,
            buttons: buttons,
            headerType: 4
        }
        dinxyz.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}