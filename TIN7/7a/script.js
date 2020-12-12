const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (request, response) {

    if (request.url === '/') {
        createHtml(response, null);
        return;
    } else {
        process(request, response);
    }
});

function createHtml(response,result) {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let file = data.toString();
            if(result !== null)
            {
                file = file.replace("<!--res-->","<label>Result = " + result +"</label>");

            }
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(file);

        }
    });
}

let add = function(par1,par2){return (par1+par2)};
let sub = function(par1,par2){return (par1-par2)};
let mul = function(par1,par2){return (par1*par2)};
let div = function(par1,par2){return (par1/par2)};

function process(request,response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    const query= url.parse(request.url,true).query;
    let req = request.url.toString().split("?")[0];
    let in1 = parseFloat(query['in1']);
    let in2 = parseFloat(query['in2']);
    switch (req)
    {
        case '/Add':
            createHtml(response,add(in1,in2));
            break;
        case '/Sub':
            createHtml(response,sub(in1,in2));
            break;
        case '/Mul':
            createHtml(response,mul(in1,in2));
            break;
        case '/Div':
            createHtml(response,div(in1,in2));
            break;
        default:
            createHtml(response,"Could not calculate");
            break;
    }
}

server.listen(8000, "127.0.0.1");
console.log("server is running: ");