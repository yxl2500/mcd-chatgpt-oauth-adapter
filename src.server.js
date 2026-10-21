
const express = require("express");

const app = express();
app.disable("x-powered-by");

const PORT = process.env.PORT || 3000;

app.get("/healthz", (_req, res) => {
  res.json({
    status: "ok",
    service: "mcd-chatgpt-oauth-adapter",
    oauth: "not-ready",
    upstream: "not-contacted",
    orderCreation: "blocked"
  });
});

app.get("/", (_req, res) => {
  res.status(200).send(
    "McDonald's China MCP adapter setup is in progress."
  );
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
