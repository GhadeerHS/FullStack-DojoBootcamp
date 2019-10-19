var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    } else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    } else if(request.url === '/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    // Stylesheets  CSS
    else if(request.url === '/stylesheets/bootstrap.css') {
        fs.readFile('./stylesheets/bootstrap.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'}); //remember to change this content-type
            response.write(contents);
            response.end();
        });
    } else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    } 
    // Images
    else if(request.url === '/images/fer.jpg'){

        fs.readFile('./images/fer.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'}); 
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/rangeroverjpg.jpg'){
        fs.readFile('./images/rangeroverjpg.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/modren.jpeg'){
        fs.readFile('./images/modren.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/cutecat.jpeg'){
        fs.readFile('./images/cutecat.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/sleepycat.jpg'){
        fs.readFile('./images/sleepycat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/sadcat.jpeg'){
        fs.readFile('./images/sadcat.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
     // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");