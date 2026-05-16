import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product.service";
import type { IProducts } from "../types/product.types";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const products = readProduct();

  const urlParts = url?.split("/");

  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;

  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "product get success", data: products }),
    );
  } else if (method === "GET" && id !== null) {
    const products = readProduct();
    const product = products.find((p:IProducts) => p.id === id)
    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify({message: "single product get success", data: product}))
    
  }
};
