const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api', eventRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
