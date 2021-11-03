const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();

    consign()   // Separa as rotas
        .include('controllers')
        .into(app)
    
    return app;
}

