const axios = require('axios')

const link = '';

const token = "";

const token1 = "";

const token2 = "";

var headers = {
    'authority': 'business.facebook.com',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'en-US,en;q=0.9',
    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': "Windows",
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1'
}
async function run() {

  try {
    let c = 0;
//for (let i = 0; i<10000; i++) {
   await axios.post('https://graph.facebook.com/me/feed?link='+link+'&published=0&access_token='+token, { headers })
  c += 1;
console.log("shared!")
//}
    } catch (e) {
  return console.log(e.message)
  }
}
async function runs() {
  try {
    let c = 0;
//for (let i = 0; i<10000; i++) {
   await axios.post('https://graph.facebook.com/me/feed?link='+link+'&published=0&access_token='+token1, { headers })
  c += 1;
console.log("Shared1!")
//}
    } catch (e) {
  return console.log(e.message)
  }
}
async function runn() {

  try {
    let c = 0;
//for (let i = 0; i<10000; i++) {
   await axios.post('https://graph.facebook.com/me/feed?link='+link+'&published=0&access_token='+token2, { headers })
  c += 1;
console.log("Shared2")
//}
    } catch (e) {
  return console.log(e.message)
  }
}
setInterval(runs, 700) // 500 means half ng 1 second
setInterval(run, 700)
setInterval(runn, 700)
