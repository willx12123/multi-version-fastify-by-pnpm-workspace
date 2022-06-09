import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors);

async function main() {
  await app.listen(3000);
}

main().catch(console.error);
