const fs = require("fs");
const http = require("http");

let arr = ["http://media.licdn.com/dms/image/D4E12AQG0hyhZmq0AyQ/article-cover_image-shrink_600_2000/0/1700488940348?e=2147483647&v=beta&t=eZtDe_xSbm65L-mR1tnM8vnfMpM3aWcSe8rw8o7sjSs"];

function saveImage(url, path) {
    var fulUrll = url;
    var localPath = fs.createWriteStream(path);
    var request = http.get(fulUrll, function (responce) {
        console.log(request);
        responce.pipe(localPath);
    })
}

for (let i = 0; i < arr.length; i++) {
    saveImage(arr[i], "./Images/" + Date.now() + ".png");
}