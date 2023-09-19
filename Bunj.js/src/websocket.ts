Bun.serve({
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("oops!", { status: 500 });
  },

  websocket: {
    open() {
      console.log("connected");
    },
    message(ws, message) {
      console.log(message);
      ws.sendText("Hello from bun");
    },
  },
});
