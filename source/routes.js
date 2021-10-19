const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

//GET, POST, PUT, DELETE
//routes.post('/users', (request, response) =>{
    //request.query = acessar os query params da requisicao (para filtros)
    //request.params = Acessar parametros de rota (para edicão, delete)
    //re.body = acessar corpo da requisicão

    //return response.json(request.body);
//});

routes.post('/sessions', SessionController.create);

routes.get('/dashboard', DashboardController.list);

routes.post('/spots', upload.single('thumbnail'), SpotController.create);
routes.get('/spots',  SpotController.list);

routes.post('/spots/:spot_id/bookings', BookingController.create);
routes.post('/spots/:spot_id/bookings', BookingController.create);

routes.post('/bookings/:booking_id/approval', ApprovalController.update);
routes.post('/bookings/:booking_id/rejection', RejectionController.update);

module.exports = routes;