const provinceSchema = require('../../models/province.model');

async function saveProvince(id, nombre){
    const provinceArg = new province({id: id, nombre: nombre});
    await provinceArg.save((err, provinceArg) => {
        if (err) return console.log(err);
        console.log('new element added to the DB', provinceArg);
    });
    return{status: 'ok'};
};

module.exports = { saveProvince };