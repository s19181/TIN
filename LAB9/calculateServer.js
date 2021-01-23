const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/calculate', (request, response) => {
    console.log(request.body);

    const w = parseFloat(request.body.w);
    const h = parseFloat(request.body.h);

    const operation = request.body.operation;

    if (operation === 'si') {
        response.json({ result: (w / Math.pow((h / 100), 2)) });
    } else if (operation === "usc") {

        response.json({result : (   (w/2.205) / Math.pow(((h*12*2.54)/100), 2)   )})
        //bmi formula for usc metrics is approximate, but i just dont want to deal with all those feet's and inches.
    }

});

app.listen(port, () => {
    console.log('Listening at port ' + port);
});