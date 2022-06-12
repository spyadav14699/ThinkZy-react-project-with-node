
const http = require('http');

const port = process.env.PORT || 5000;
const app = require('./app');
const server = http.createServer(app);



server.listen(port, () => { console.log('Server is running on port 5000'); }
);
