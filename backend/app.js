const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(cors());

app.use("/model", express.static(path.join(__dirname, "model.json")));
  
app.use("/", express.static(path.join(__dirname, "")));


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

