const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "listsurah",
    alias: ["surah"],
    desc: "List Of Surah Al-quran",
    type: "islami",
    exec: async(dinxyz, m) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/islami/quran", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `List Surah Al-quran\n\n`
        for (var x in fetch.result) {
            teks += `${x}. ${fetch.result[x]}\n`
        }
        dinxyz.sendText(m.from, teks, m)
    }
}