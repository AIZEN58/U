import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*من فضلك رد بالباركود الذي تريد تحويله الى رمز*'
let img = await q.download?.()
let url = await uploadImage(img)
let anu = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${url}`)
let json = await anu.json()
await m.reply(`*here u go:* ${json.result}`)}
handler.command = /^(اقرا)$/i
export default handler
