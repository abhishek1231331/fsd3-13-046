import http from 'http'
import { getAllProduct } from "./product.js";

const server = http.createServer((req, res) => {
   
    if (req.url === "/api/v1/products" && req.method === "GET") {
        res.statusCode = 200;
        const prds = getAllProduct();
        res.setHeader('content-type', 'application/json')
        
        res.end(JSON.stringify({
            count: prds.length, data:prds
        }),
        );
    }

    else if (req.url === "/api/v1/products" && req.method === "POST") {
        //console.log("Request:", req);
        let body = ' '
        req.on('data', (chunk) => {
            body += chunk

        })
        req.on("end", () => {
            const product = JSON.parse(body);
            console.log("received products:", product);
            res.statusCode = 201;
        res.end(JSON.stringify({msg:'product added',product}));
        });
        
    }

    else if (req.url.startsWith("/products/") && req.method === "PUT") {
        const productID = req.url.split('/').pop();
        console.log('update Product id', productID);
        let body = ' '
        req.on('data', (chunk) => {
            body += chunk

        });
        req.on("end", () => {
            const product = JSON.parse(body);
            product.id = productID
            res.statusCode = 200;
            res.end(JSON.stringify({ msg: 'product updated', product }));
        });

        
    }

    else if (req.url === "/" && req.method === "DELETE") {
        res.statusCode = 200;
        res.end("DELETE Request");
    }

    else {
        res.statusCode = 404;
        res.end("Request not found");
    }
});

server.listen(5000, () => console.log("prg6 is running"));