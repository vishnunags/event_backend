const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

// Middleware
app.use(express.json());
app.use(cors());
app.options('*', cors()); // Enable pre-flight across all routes

// Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api', eventRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
