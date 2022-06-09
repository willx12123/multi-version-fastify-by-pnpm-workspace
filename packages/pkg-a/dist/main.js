"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)();
app.register(cors_1.default, {
    methods: ["POST"],
    origin: [/\.v2xengine\.com$/, /\.localhost$/],
});
async function main() {
    await app.listen(3000);
}
main().catch(console.error);
