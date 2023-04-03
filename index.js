import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req,res) => {
  res.send("I am Index");
})

app.get('/hello', (req, res) => {
  res.send("Hello there, it's Monday");
});

app.listen(PORT, () => {
  // console.log(`listening to port ${PORT}`);
  console.log(`Listening on port http://localhost:${PORT}`) // command & enter in Terminal
});