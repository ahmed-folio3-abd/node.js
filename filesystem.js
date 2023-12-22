const fs = require('fs');
//promises
// fs.readFile('asyncFile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log(data);
// });
// Using writeFile with a callback
fs.writeFile('asyncFile.txt', "This is a file from async write", 'utf8', (err) => {
    if (err) {
        console.error('Error writing file asynchronously:', err);
    } else {
        console.log('File written asynchronously!');
    }
});
