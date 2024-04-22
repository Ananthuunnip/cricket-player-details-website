const path = require('path');
const rootDir = require('../utils/path');
const playerdata = require('../model/user.model')
exports.getmainpage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"view",'index.html'))
}

exports.postadddetails = (req,res,next)=>{
    const name = req.body.inputname
    const dob = req.body.inputdob
    const photourl = req.body.inputphotourl
    const birthplace = req.body.inputbirthplace
    const career = req.body.inputcareer
    const nomatch = req.body.inputnomatch
    const score = req.body.inputscore
    const fifties = req.body.inputfifties
    const century = req.body.inputcentury
    const wickets = req.body.inputwickets
    const average = req.body.inputaverage
    console.log(name);
    playerdata.create({
        name : name,
        dob : dob,
        photourl : photourl,
        birthplace : birthplace,
        career : career,
        nomatch : nomatch,
        score : score,
        fifties : fifties,
        century : century,
        wickets : wickets,
        average : average
    })
    .then((result)=>{
        console.log("Added Player data")
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })

}