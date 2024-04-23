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


exports.getfetchdetails = async (req, res, next) => {
    try {
        const inputsearch = req.params.inputdata;
        console.log('Search query:', inputsearch);
        const player = await playerdata.findOne({ where: { name: inputsearch } });
            // If player data is found, send it back as part of the response
            res.status(200).json({ message: 'Success', data: player });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// exports.getfetchdetails = (req, res, next) => {
//     console.log(req.query);
//     const inputsearch = req.query.inputdata;
//     console.log('data : ' + inputsearch);
//     res.json("abcd")
    // playerdata.findOne({ where: { name: inputsearch } })
    //     .then(result => {
    //         console.log("found the Player : "+ result.dob)
                //  res.redirect('/');
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // res.redirect('/postdata');
// }
// exports.postdata = (req,res,next)=>{
//     console.log("reacher : ")
//     // .then((result)=>{
//     //     console.log("Added Player data")
//     // })
//     // .catch((err)=>{
//     //     console.log(err);
//     // })
// }