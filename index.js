const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.cookies.hasVisited) {
        res.send(buildResponse('Already Visited', true));
    } else {
        res.cookie('hasVisited', 'true', { maxAge: 365 * 24 * 60 * 60 * 1000 });
        res.send(buildResponse('New Visitor', false));
    }
});

function buildResponse(message, hasVisited) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Visit Checker</title>
        </head>
        <body>
            <p>${message}</p>
            <script>
                if(localStorage.getItem('hasVisited')) {
                    document.querySelector('p').textContent = 'Already Visited';
                } else {
                    if (!${hasVisited}) {
                        localStorage.setItem('hasVisited', 'true');
                    }
                }
            </script>
        </body>
        </html>
    `;
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
