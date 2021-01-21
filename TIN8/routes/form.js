import Express from "express"
const app = Express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

app.get('/form', (request, response) => {
    response.sendFile("C:\\Users\\Admin\\WebstormProjects\\TIN8\\routes\\form.html");
});

app.post('/formdata', (request, response) => {
    response.render('formdata', {name: request.body.name, surname: request.body.surname, dob: request.body.dob});
});

app.listen(port, () => console.log("listening to port " + port));