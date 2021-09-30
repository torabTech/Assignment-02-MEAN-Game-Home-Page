const jsonData = require('../../public/data/games.json');

getAll = (req,res) => {
    console.log('controller is called')
    res.status(200).json(jsonData);
}

module.exports = {
    getAll : getAll
}