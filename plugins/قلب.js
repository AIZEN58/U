const handler = async (m, { conn, command, text }) => {
  if (!text) throw `*اكتب عيوشة الزعلانة ياحب 😂😂❤️ *`
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response =
    ` *${text} عيوشة ليش زعلانة 😂😂*` +
    ``    

  async function loading() {
var hawemod = [
"هلا يا رمانة 😂",
"هلا يا رماانة",
"عيوشة زعلانة 😂💔",
  "عيوشة زعلاانة🙂💗"
"مين يراضيها مين منو يراضيها ❤️😂",
"انا اراضيها ⭐ ",
"انا💗",
"انا اراضيها 🐥",
"عيوشة الزعلانة🐤🧡"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*جاري تحميل القلوب 😻😻*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(عيوشه|عيوشة)$/i;
export default handler;
