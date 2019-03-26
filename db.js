//import mongoose from "mongoose";
const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useFindAndModify: false
    });

    const db = mongoose.connection;
    const handleOpen = () => console.log("Connected to DB");
    const handleError = error => console.log(`Error on DB Connection:${error}`);
    db.once("open",handleOpen);
    db.on("error",handleError);


//새로운 mongoose는 이런식으로 configuration을 보낼수있다.

//121.66.142.174
/*
export const videos = [
    {
        id:324393,
        title: 'Video awesome',
        description: 'This is something I love',
        views : 24,
        videoFile: "https://converter.savefrom.net/joiner?id=SXiSVQZLje8&v=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D32691575%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26itag%3D247%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.904%26lmt%3D1543878181639133%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Daitags%252Cclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26aitags%3D133%252C134%252C135%252C136%252C137%252C160%252C242%252C243%252C244%252C247%252C248%252C278%252C394%252C395%252C396%252C397%252C398%26txp%3D5533432%26mime%3Dvideo%252Fwebm%26signature%3DAB6DD30C679D60FF0A0C880C91D289038E1F9C88.C1742D446E931CA80845A1EF36619D5D6C3B3865&a=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D3687090%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.909%26lmt%3D1543934303851532%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26itag%3D171%26txp%3D5511222%26mime%3Daudio%252Fwebm%26signature%3D356176A3C12CBE0C20143E89E260B0F2981DD9E3.658747C237232775825C7F3739C2D3C78263CF0A&ts=1553243616&ip=121.66.142.170&sig=d79e8a9b6f548787d3687450434d3f16&t=Ariana+Grande+-+Side+To+Side+ft.+Nicki+Minaj&gacid=1097276616.1548810374",
        creator: {
            id: 121212,
            name:"Nicolas",
            abc: "nico@las.com"
        }
    },
    {
        id:324393,
        title: 'Video awesome',
        description: 'This is something I love',
        views : 24,
        videoFile: "https://converter.savefrom.net/joiner?id=SXiSVQZLje8&v=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D32691575%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26itag%3D247%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.904%26lmt%3D1543878181639133%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Daitags%252Cclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26aitags%3D133%252C134%252C135%252C136%252C137%252C160%252C242%252C243%252C244%252C247%252C248%252C278%252C394%252C395%252C396%252C397%252C398%26txp%3D5533432%26mime%3Dvideo%252Fwebm%26signature%3DAB6DD30C679D60FF0A0C880C91D289038E1F9C88.C1742D446E931CA80845A1EF36619D5D6C3B3865&a=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D3687090%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.909%26lmt%3D1543934303851532%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26itag%3D171%26txp%3D5511222%26mime%3Daudio%252Fwebm%26signature%3D356176A3C12CBE0C20143E89E260B0F2981DD9E3.658747C237232775825C7F3739C2D3C78263CF0A&ts=1553243616&ip=121.66.142.170&sig=d79e8a9b6f548787d3687450434d3f16&t=Ariana+Grande+-+Side+To+Side+ft.+Nicki+Minaj&gacid=1097276616.1548810374",
        creator: {
            id: 121212,
            name:"Nicolas",
            abc: "nico@las.com"
        }
    },
    {
        id:324393,
        title: 'Video awesome',
        description: 'This is something I love',
        views : 24,
        videoFile: "https://converter.savefrom.net/joiner?id=SXiSVQZLje8&v=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D32691575%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26itag%3D247%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.904%26lmt%3D1543878181639133%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Daitags%252Cclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26aitags%3D133%252C134%252C135%252C136%252C137%252C160%252C242%252C243%252C244%252C247%252C248%252C278%252C394%252C395%252C396%252C397%252C398%26txp%3D5533432%26mime%3Dvideo%252Fwebm%26signature%3DAB6DD30C679D60FF0A0C880C91D289038E1F9C88.C1742D446E931CA80845A1EF36619D5D6C3B3865&a=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D3687090%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.909%26lmt%3D1543934303851532%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26itag%3D171%26txp%3D5511222%26mime%3Daudio%252Fwebm%26signature%3D356176A3C12CBE0C20143E89E260B0F2981DD9E3.658747C237232775825C7F3739C2D3C78263CF0A&ts=1553243616&ip=121.66.142.170&sig=d79e8a9b6f548787d3687450434d3f16&t=Ariana+Grande+-+Side+To+Side+ft.+Nicki+Minaj&gacid=1097276616.1548810374",
        creator: {
            id: 121212,
            name:"Nicolas",
            abc: "nico@las.com"
        }
    },
    {
        id:324393,
        title: 'Video awesome',
        description: 'This is something I love',
        views : 24,
        videoFile: "https://converter.savefrom.net/joiner?id=SXiSVQZLje8&v=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D32691575%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26itag%3D247%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.904%26lmt%3D1543878181639133%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Daitags%252Cclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26aitags%3D133%252C134%252C135%252C136%252C137%252C160%252C242%252C243%252C244%252C247%252C248%252C278%252C394%252C395%252C396%252C397%252C398%26txp%3D5533432%26mime%3Dvideo%252Fwebm%26signature%3DAB6DD30C679D60FF0A0C880C91D289038E1F9C88.C1742D446E931CA80845A1EF36619D5D6C3B3865&a=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D3687090%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.909%26lmt%3D1543934303851532%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26itag%3D171%26txp%3D5511222%26mime%3Daudio%252Fwebm%26signature%3D356176A3C12CBE0C20143E89E260B0F2981DD9E3.658747C237232775825C7F3739C2D3C78263CF0A&ts=1553243616&ip=121.66.142.170&sig=d79e8a9b6f548787d3687450434d3f16&t=Ariana+Grande+-+Side+To+Side+ft.+Nicki+Minaj&gacid=1097276616.1548810374",
        creator: {
            id: 121212,
            name:"Nicolas",
            abc: "nico@las.com"
        }
    },
    {
        id:324393,
        title: 'Video awesome',
        description: 'This is something I love',
        views : 24,
        videoFile: "https://converter.savefrom.net/joiner?id=SXiSVQZLje8&v=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D32691575%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26itag%3D247%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.904%26lmt%3D1543878181639133%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Daitags%252Cclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26aitags%3D133%252C134%252C135%252C136%252C137%252C160%252C242%252C243%252C244%252C247%252C248%252C278%252C394%252C395%252C396%252C397%252C398%26txp%3D5533432%26mime%3Dvideo%252Fwebm%26signature%3DAB6DD30C679D60FF0A0C880C91D289038E1F9C88.C1742D446E931CA80845A1EF36619D5D6C3B3865&a=https%3A%2F%2Fredirector.googlevideo.com%2Fvideoplayback%3Fmm%3D31%252C26%26ms%3Dau%252Conr%26ei%3DrouUXP3dH4yZyAWVs4zYAQ%26mv%3Dm%26mt%3D1553238877%26mn%3Dsn-gvnuxaxjvh-n8vr%252Csn-axq7sn7l%26clen%3D3687090%26gir%3Dyes%26requiressl%3Dyes%26id%3Do-ADJcCN-9CN72QIJpAjr14WSGsXT4qr3j-OJefcZ9aaE3%26fvip%3D6%26initcwndbps%3D812500%26source%3Dyoutube%26expire%3D1553260558%26dur%3D237.909%26lmt%3D1543934303851532%26key%3Dyt6%26ip%3D78.156.243.146%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cexpire%26c%3DWEB%26nh%3D%252CIgpwcjAzLnN2bzAzKgkxMjcuMC4wLjE%26keepalive%3Dyes%26pl%3D23%26itag%3D171%26txp%3D5511222%26mime%3Daudio%252Fwebm%26signature%3D356176A3C12CBE0C20143E89E260B0F2981DD9E3.658747C237232775825C7F3739C2D3C78263CF0A&ts=1553243616&ip=121.66.142.170&sig=d79e8a9b6f548787d3687450434d3f16&t=Ariana+Grande+-+Side+To+Side+ft.+Nicki+Minaj&gacid=1097276616.1548810374",
        creator: {
            id: 121212,
            name:"Nicolas",
            abc: "nico@las.com"
        }
    },
]; */