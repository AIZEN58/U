//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^يا اوراهارا|يا اورا$/i.test(m.text)) { 
     responses = [ 
 '* https://file.io/sj8H5wnCl1wU *'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^اورا|اوراهارا$/i.test(m.text)) { 
     responses = [ 
'*بوت اوراهارا تحت امرك*'
     ]; 
 }else if (/^اورا من عمك|اوراهارا عمك$/i.test(m.text)) { 
     responses = [ 
'*اوراهارا اككيد😩❤‍🔥*'
     ]; 
   }else if (/^اوراهارا هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^اوراهارا تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^اوراهارا تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🗿*',   ]; 
     
     }else if (/^هلا|هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',
