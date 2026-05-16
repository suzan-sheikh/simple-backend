import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    console.log(url, method);
  },
);

server.listen(3000,() =>{
    console.log("the server is running on port 3000");
})