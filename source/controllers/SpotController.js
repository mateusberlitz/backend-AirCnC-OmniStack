const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async list(request, response){
        const { tech } = request.query;

        const spots = await Spot.find({ techs: tech});

        return response.json(spots);
    },

    async create(request, response){
        const { filename } = request.file;
        const {company, techs, price } = request.body;
        const { user_id } = request.headers;

        const user = await User.findById(user_id);

        if(!user){
            return response.status(400).json({error: 'Usuário não existe'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return response.json(spot);
    }
}