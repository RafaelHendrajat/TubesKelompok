import express from 'express';
import path from 'path';
import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const PORT = 8080;
const app = express();

app.set('view engine', 'ejs')

app.set('views', [path.join(__dirname, 'views'),
path.join(__dirname, 'views/Profile')


]);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/grafikbar', (req, res) => {
    res.render('grafikbar');
});

app.get('/graftakberarah', (req, res) => {
    res.render('graftakberarah');
});

app.get('/pencarian', (req, res) => {
    res.render('pencarian');
});

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
});
