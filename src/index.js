import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is application x deployed using Backstage");
});

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
