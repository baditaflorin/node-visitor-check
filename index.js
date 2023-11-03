const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.cookies.hasVisited) {
        res.send('Already Visited');
    } else {
        // Set the cookie to expire after 365 days (can be adjusted as per requirements)
        res.cookie('hasVisited', 'true', { maxAge: 365 * 24 * 60 * 60 * 1000 });
        res.send('New Visitor');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
