const axios = require('axios');


exports.getProvinces = async (req, res) => {
    const url = 'https://apis.datos.gob.ar/georef/api/provincias'
    try {
        let provinces = [];
        await axios.get(`${url}`)
        .then(resp => {
        const { provincias } = resp.data
        provincias.map(item =>{
            const province = { id: item.id, name: item.nombre}
            provinces.push(province)
        })

        res.status(200).json({
            ok: true,
            provinces
        })
    })
    } catch (error) {
        res.status(404).json({
            ok: false, 
            msg: error
        })
    } 
}

exports.getCitys = async (req, res)=> {
    const url = 'https://apis.datos.gob.ar/georef/api/departamentos?provincia='
    const { nameCity } = req.query; 
    try {
        let citys = [];
        await axios.get(`${url}${nameCity}`)
        .then(resp => {
        const { departamentos } = resp.data
        departamentos.map(item =>{
            const city = { id: item.id, name: item.nombre}
            citys.push(city)
        })

        res.status(200).json({
            ok: true,
            citys
        })
    }) 
    } catch (error) {
        res.status(404).json({
            ok: false, 
            msg: error
        })
    } 
} 