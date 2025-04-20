import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("this is application x");
});

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`Example testing app listening on port ${port}`);
});
