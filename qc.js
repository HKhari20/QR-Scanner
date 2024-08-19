import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
.prompt([
    {
        message:"url podu",
        name:"url",
    }
])

.then((answer)=>{
    const URL=answer.url;
    console.log(URL);
    var qrImage=qr.image(URL,{type:'png'});
    qrImage.pipe(fs.createWriteStream("xyz.png"));

    fs.writeFile("urltext.txt",URL,(error)=>{
        if (error) throw error;
        console.log("file sucessfull");
    })
})