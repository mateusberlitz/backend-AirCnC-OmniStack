//index(list), show, store(create), update, destroy
const User = require('../models/User');

module.exports = {
    async create(request,response){
        //{ email } busca o request.body.email, ou seja busca email dentro de body;
        const { email } = request.body;

        let user = await User.findOne({email});

        if(!user){
            const user = await User.create({ 
                email 
            });
        }

        return response.json(user);
    }
};