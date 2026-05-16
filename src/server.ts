import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(JSON.stringify({ message: "This is root route" }));
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end(JSON.stringify({ message: "route not found" }));
    }
  },
);

server.listen(3000, () => {
  console.log("the server is running on port 3000");
});
