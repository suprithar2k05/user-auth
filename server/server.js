const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use(errorHandler);
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
