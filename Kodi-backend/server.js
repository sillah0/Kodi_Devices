const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.listen(5000, () => {
   console.log('Server is running on port 5000');
});
