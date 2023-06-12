import routes from "./controllers/index.js";
import path from 'path';
import express from 'express'; //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3001; //Line 3

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

try {
    throw 'bang'
} catch (err) {
    console.log(err, 'rrr')
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


//add new mead
//type
//quantity in ml
//when aging began
//goal age
//initial taste score