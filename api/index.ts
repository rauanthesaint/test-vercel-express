import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/", (req, res) => {
  res.json({
    message: "Hi",
  });
});

app.listen(3000, () => console.log("Server ready on port 3000"));

export default app;
