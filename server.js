import jsonServer from "json-server";
import { createServer } from "http";

const port = process.env.PORT || 5005;
const http = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export const server = http.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
