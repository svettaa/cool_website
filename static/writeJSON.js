const fs = require('fs');
const config = require('../config/config.json')

exports.rewriteJS = (bln) =>
{

let student = {

    "websiteName": config.websiteName,
    "domainName": config.domainName,
    "img":config.img ,
    "menuColor": config.menuColor,
    "menuItemsUkr":config.menuItemsUkr,
    "menuItemsEng": config.menuItemsEng,
    "letter": bln
};

let data = JSON.stringify(student, null, 2);


    try {
        //з відносним щляхом чомусь на даль не працбє
        fs.writeFileSync('C:\\Users\\Sofiya\\Downloads\\Telegram Desktop\\cool (3)\\cool\\config\\config.json', data);
        console.log("JSON data is saved.");
    } catch (error) {
        console.error(error);
    }
    console.log(require('../config/config.json'));
}
