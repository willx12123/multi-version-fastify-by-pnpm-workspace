import fastify from "fastify";
import fastifyWs, { SocketStream } from "@fastify/websocket";
import fastifyCors from "@fastify/cors";

async function main() {
  const server = fastify();

  server.register(fastifyCors);
  server.register(fastifyWs);

  server.register(async (fastify) => {
    fastify.get("/api/ws", { websocket: true }, (_: SocketStream) => {});
  });

  await server.listen(4291);
}

main().catch(console.error);
