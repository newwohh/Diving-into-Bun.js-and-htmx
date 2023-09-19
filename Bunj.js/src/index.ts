import { type ServeOptions } from "bun";
console.log("Bun");
//bunx cowsay "hello"

Bun.serve({
  //   async fetch(request: Request) {
  //     throw new Error("bad request");
  //   },
  async fetch(request: Request) {
    const url = new URL(request.url);
    return new Response(`${url.href}\n`);
  },

  error(error) {
    console.log(error);
    return new Response("oops!");
  },

  //   tls: {
  //     key: Bun.file("./key.pem"),
  //     cert: Bun.file("./cert.pem"),
  //   },
}) as ServeOptions;
