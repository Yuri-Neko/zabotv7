let handler = async (m, { conn, text }) => {
  let url = 'https://i.pinimg.com/736x/15/87/11/158711b8c438f716ab2f16a5780b09d1.jpg'
  conn.sendFile(m.chat, url, '', '', m, false, { asSticker: true })
}
handler.command = ['sora'] // buat command
handler.tags = ['anime'] // biar otomatis di list di menu. liat di menu js
handler.help = ['sora'] // yang tampil di menu
export default handler
