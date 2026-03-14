import http from "http";
import { handleRoute } from "./router.js";

const server = http.createServer((req, res) => { 
    handleRoute(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});