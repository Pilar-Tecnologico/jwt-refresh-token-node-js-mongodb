const axios = require('axios');

exports.getServicesInternet = async (req, res) =>{
    const { param_cue }  = req.query; 
    const url = 'https://modernizacion.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20modernizacion.data_1'
    
    try {

        await axios.get(`${url}`)
        .then(resp =>{
            const { rows } = resp.data
            const school = rows.filter(item => item.cue == param_cue)
            
            if(school.lenght !== 0 ){
                res.status(200).json({
                    ok: true, 
                    school
                })
            }
        })
        
    } catch (error) {   
    }

}
