const express = require('express')

const app = express();

app.get('/', (Request, Response) => {
    return Response.json({
        evento: 'Semana Omnistack',
        dev: 'Bruno Habermann'
    });
});

app.listen(3333);