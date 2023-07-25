const express = require('express');
const connect = require('./db');
const sutudent = require('./mongoose');

const app = express();

app.use(express.json());

app.get('/',async(req,res) => {
    res.send(await sutudent.find())
})
app.get('/home', async (req, res) => {
    let data=await sutudent.find({
    // gender:req.query.gender,

    // maths:{$gt:req.query.maths},
    // science:{$gt:req.query.science},
    // english:{$gt:req.query.english}

    // maths:{$gt:req.query.maths1,$lt:req.query.maths2},
    // english:{$gt:req.query.english1,$lt:req.query.english2}

    // class:{$gt:req.query.class1,$lt:req.query.class2},
    // section:"A"
    // maths:{$gt:req.query.maths},
    // science:{$gt:req.query.science},
    // english:{$gt:req.query.english}

    // class:"IV".sort({maths:-1}).limit(2) 

    // .sort({ maths: 1 }).skip(1).limit(3);

    // .sort({maths:-1 , english:-1}).skip(1).limit(3);
    })
    res.send(data);
});

app.post('/data', async(req, res) => {
    await sutudent.create(req.body)
    res.send(req.body)
    console.log("data sned!");
});

app.listen(8080,()=>{
    console.log("server listening on");
    connect();
})