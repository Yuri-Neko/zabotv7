let handler = async (m, { conn, text }) => {
  let url = 'https://i.pinimg.com/originals/9b/bd/d3/9bbdd3c7884308f36df49d3a3b2eb6f7.gif'
  conn.sendFile(m.chat, url, '', '', m, false, { asSticker: true })
}
handler.command = ['sora'] // buat command
handler.tags = ['anime'] // biar otomatis di list di menu. liat di menu js
handler.help = ['sora'] // yang tampil di menu
export default handler
