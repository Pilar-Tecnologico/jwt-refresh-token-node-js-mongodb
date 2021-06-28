const db = require("../models");
const { school: School } = db; 

exports.newSchool = async (req, res) => {
    const { cue } = req.body;
    const userId = req.userId;
    try {
        
        const cueBD = await School.findOne({ cue });

        if( cueBD ) {
            return res.status(400).json({
                ok: false,
                msg: 'La escuela ya se encuentra registrada',
            });
        }

        const school = new School({ 
                director : req.body.director,
                school   : req.body.school, 
                cue      : req.body.cue,
                enrollment_number : req.body.enrollment_number,
                province : req.body.province,
                city     : req.body.city,
                status_internet : req.body.status_internet,
                internet_services : req.body.internet_services,
                user : userId
                });
        
        school.save((err, schoolBD) =>{
            res.status(200).json({ 
                ok: true, 
                msg: "La escuela fue añadida con éxito",
                schoolBD 
            });
        })

    } catch (error) {
        res.status(400).json(
            {
                ok: false, 
                msg: error
            }
        )
    }
   
}

exports.getSchool = async (req, res) =>{

    try {

        const schoolDB = await School.find();
    
        return res.status(404).json({
            ok: true,
            msg: schoolDB
        });
    } catch (error) {
        
        return res.status(505).json({
            ok: false,
            msg: error
        });
    }

}