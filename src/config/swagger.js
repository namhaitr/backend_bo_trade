const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Cấu hình Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BO TRADER API',
            version: '1.0.0',
            description: 'API BACKEND',
        },
        servers: [
            {
                url: 'http://localhost:3000/api', // Đường dẫn API gốc
            },
        ],
    },
    apis: ['./src/routes/*.js'], // Tệp chứa các API route
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
