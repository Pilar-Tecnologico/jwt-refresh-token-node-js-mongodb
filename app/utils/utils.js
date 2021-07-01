const Player = require("../models/player.model");

const playerExist = async (player_key = '') => {
    const res = await Player.findOne({ player_key });

    if (res) {
        return true;
    } else {
        return false;
    }
}


const registerPlayers = async (result) => {
    const { team_key, team_name, players } = result;

    players.forEach(async element => {

        const { player_key, player_name, player_number, player_type, player_age } = element;
        const exist = await playerExist(player_key);

        if (exist) {
            console.log(`the ${player_name} is already registered`)
        } else {
            const player = new Player({
                player_key,
                team_key,
                team_name,
                player_name,
                player_number,
                player_type,
                player_age
            });

            player.save()
                .then(() => console.log(`the ${player_name} player was stored correctly`))
                .catch(err => console.error(err));
        }

    });
    
}



module.exports = {
    playerExist,
    registerPlayers
}