const fs = require('fs');
const config = require('../config/config.json')


exports.rewriteJS = (bln) =>
{

let student = {
    "websiteName": config.menuItems,
    "domenName": config.domenName,
    "img":config.img ,
    "menuColor": config.menuColor,
    "menuItems": config.menuItems,
    "letter": bln
};

let data = JSON.stringify(student, null, 2);
    console.log(config);
fs.writeFile('C:\\Users\\Sofiya\\Downloads\\Telegram Desktop\\cool (3)\\cool\\config\\config.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});}
