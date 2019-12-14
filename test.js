// 引用linebot SDK
var linebot = require('linebot');
var request = require('request');
var cheerio = require('cheerio');

const url = 'https://www.sgi.org/cht/about-us/president-ikedas-writings/daily-encouragement/'

const bodyAry = []
var h2 = ""
var p = ""
var h3 = ""
var userId = 'C43624718e3c253fe00e4c6ec365d8a58'
request(url, (err, res, body) => {
    //bodyAry = []
    //console.log(body)
    const contsxt = cheerio.load(body)
    contsxt('.enc_content h2').each(function (i, elem) {
        h2 = contsxt(this).text().trim() + '\n'
    })
    contsxt('.enc_content p').each(function (i, elem) {
        p = contsxt(this).text().trim() + '\n'
    })
    contsxt('.enc_content h3').each(function (i, elem) {
        h3 = contsxt(this).text().trim()
    })
    console.log(h2 + '\n' + p + '\n' + h3)
})

// // 用於辨識Line Channel的資訊
// var bot = linebot({
//     channelId: '1653643880',
//     channelSecret: 'aec483d499af9c703b494bc8c2c52b6b',
//     channelAccessToken: 'B34wRIsAhSspQCnpzZYjgr2E0L76+Ft2xe25p5iLo4D+BbvMhXlGj0JiCqE5DuldrI0uTKhIrpyRal9BI3sIG/KYqdS+/zjWhkpAM4VqsxRZJx+MthnG/kVs+GMm1fgRi6+D7dbe9XZdqtDxRXEiyAdB04t89/1O/w1cDnyilFU='
// });

// //當有人傳送訊息給Bot時
// bot.on('message', function (event) {
//     // event.message.text是使用者傳給bot的訊息
//     // 準備要回傳的內容
//     event.reply(h2 + '\n' + p + '\n' + h3).then(function (data) {
//         // 當訊息成功回傳後的處理
//     }).catch(function (error) {
//         // 當訊息回傳失敗後的處理
//     });
//     console.log(event);
// });

// setInterval(function () {
//     bot.push(userId, '123')
// }, 10000);

// // Bot所監聽的webhook路徑與port
// bot.listen('/linewebhook', 3000, function () {
//     console.log('[BOT已準備就緒]');
// });