import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        const stream = createReadStream("bottle.html", { encoding: "utf8" });
        stream.pipe(res);
    } else if (req.url === "/about") {
        res.end("About Page");

    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});