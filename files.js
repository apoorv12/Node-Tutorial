// const fs = require('fs');

// reading files
// fs.readFile('./blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// writing files
// fs.writeFile('./blog.txt', 'Hello Apoorv', () => {
//     console.log("file was written");
// });

// fs.writeFile('./blog1.txt', 'Hello Again', () => {
//     console.log("file was written");
// });

// Directories
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     } console.log("folder created");
// });

// deleting files
// if (fs.existsSync('./blog.txt')) {
//     fs.unlink('./blog.txt', (err) => {
//         if (err) {
//             console.log(err);
//         } console.log('file deleted');
//     });
// }

const fs = require('fs');

// To read data stream on console

// const readStream = fs.createReadStream('./blog3.txt', { encoding: 'utf-8' });

// readStream.on('data', (chunk) => {
//     console.log('--- CHUNK---');
//     console.log(chunk);
// });

// To read stream data and output in the other file

const readStream = fs.createReadStream('./blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./blog4.txt');

readStream.pipe(writeStream);