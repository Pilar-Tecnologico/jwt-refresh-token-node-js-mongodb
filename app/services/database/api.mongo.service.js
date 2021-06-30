const apiSchema = require("../../models/apiVerifier.model");

async function saveVerifiedData(email, name) {
  const apiNew = new apiSchema({ name: name, email: email });

  await apiNew.save((err, apiNew) => {
    if (err) return console.log(err);
  });
}

module.exports = { saveVerifiedData };
