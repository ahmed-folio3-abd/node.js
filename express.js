// console.log("HI");
// const express = require('express');
// const app = express();

// app.get("/", (req, res) => {
//     console.log("HERE");
//     res.send("Home");
// })
// app.listen(8000, () => {
//     console.log(`Server running on port 8000}`);
// });
// app.js
// const express = require('express');
// const app = express();

// const homeRoute = require('./aboutMe');
// // const aboutMeRoute = require('./aboutMePage');

// app.use("/", homeRoute);
// app.use("/about", aboutMeRoute);

// const PORT = 8000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
// express.js
// const express = require('express');
// const app = express();
// const aboutMeRoute = require('./aboutMe');

// Home page route
// app.get('/', (req, res) => {
//     res.sendFile('./aboutMe.js', { root: __dirname });
// });

// About Me page route
// app.use('/about', aboutMeRoute);

// Start the server
// const PORT = 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// Home page route

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Home page route
app.get('/', (req, res) => {
    const homePath = path.join(__dirname, 'aboutMe.html');

    // Read the content of index.html file
    fs.readFile(homePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            // Add a link to navigate to the about page
            const contentWithLink = data.replace('<h1>', '<a href="/about"> Me Page</a><h1>');
            res.send(contentWithLink);
        }
    });
});

// About Me page route
app.get('/about', (req, res) => {
    const aboutMePath = path.join(__dirname, 'aboutMe.html');

    // Read the content of aboutMe.html file
    fs.readFile(aboutMePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // Send the content as the response
            res.send(data);
        }
    });
});

// Start the server
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// jsonPatch();