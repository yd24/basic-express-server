require('dotenv').config();
const app = require('./server.js');

const PORT = process.env.PORT || 3002;

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${PORT}`);
});