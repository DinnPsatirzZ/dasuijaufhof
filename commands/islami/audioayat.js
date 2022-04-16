const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audioayat",
    alias: ["audioayat"],
    desc: "Download Audio From audioayat",
    type: "islami",
    example: "Example : %prefix%command 1 1",
    exec: async(dinxyz, m, { text, args, prefix, command }) => {
        let [a, b] = args
        global.mess("wait", m)
        dinxyz.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${a}/${b}`, {}, "apikey"), "", m)
    },
    isQuery: true
}