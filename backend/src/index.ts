import express from "express";
import { requireAuth } from "./auth.js";

export function createApp() {
  const app = express();

  app.get("/", requireAuth, (_req, res) => {
    res.json({
      message: "This endpoint is protected",
      status: "ok",
    });
  });

  return app;
}

if (process.argv[1]?.endsWith("index.ts") || process.argv[1]?.endsWith("index.js")) {
  const app = createApp();
  const port = Number(process.env.PORT ?? 3001);

  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
  });
}
