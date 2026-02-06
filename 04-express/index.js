import express from "express";

const PORT = process.env.PORT ?? 1234;
const app = express();

app.use((req, res, next) => {
  const timeString = new Date().toLocaleTimeString();
  console.log(`[${timeString} ] ${req.method} ${req.url}`);
  next();
});

const previousHomeMiddleware = (req, res, next) => {
  console.log("Previous home middleware");
  next();
};

app.get("/", previousHomeMiddleware, (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
