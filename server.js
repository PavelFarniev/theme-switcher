const express = require('express');
const path = require('path');

const themeRoutes = require('./routes/themeRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/theme', themeRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
