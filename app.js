const express = require('express')
const app = express()

const line = require('@line/bot-sdk')
const request = require('request')

var admin = require('firebase-admin')
var serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://everydaysentence.firebaseio.com"
})

const config = {
    channelAccessToken: 'B34wRIsAhSspQCnpzZYjgr2E0L76+Ft2xe25p5iLo4D+BbvMhXlGj0JiCqE5DuldrI0uTKhIrpyRal9BI3sIG/KYqdS+/zjWhkpAM4VqsxRZJx+MthnG/kVs+GMm1fgRi6+D7dbe9XZdqtDxRXEiyAdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'aec483d499af9c703b494bc8c2c52b6b' 
}

const client = new line.Client(config)