import type { IncomingMessage, ServerResponse } from "http";


export const handleRoute = (req:IncomingMessage, res:ServerResponse) => {
    if(req.url === "/") {
            res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello, World!");
    } else if(req.url === "/info" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({ message: "This is the info page", timestamp: new Date().toISOString() }));
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>404 Not Found</h1>");
    }
} 