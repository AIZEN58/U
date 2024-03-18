import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*يقوم هذا الامر بانشاء صور حسب المتطلبات النصيةق*\n\n*مثال usage*\n*◉ ${usedPrefix + command} فتاة انمي جميلة*\n*◉ ${usedPrefix + command} ايلون ماسك بالزي الوردي*`;

  try {
    m.reply('*الرجاء الانتظار جاري انشاء الصور...'*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل الحصول على نتيجة*';
    }
  } catch {
    throw '*اعتذر، ثمة خطا لم يتم التعرف عليه الرجاء المحاولة مرة اخرى .*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['dalle', 'شكل', 'imagine', 'مظهر'];
export default handler;
