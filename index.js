import express from 'express';
import path from 'path';
import mysql from 'mysql';
import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const PORT = 8080;
const app = express();

const pool = mysql.createPool({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'gameofthrones',
    dateStrings: true,
    connectionLimit: 10
});

app.set('view engine', 'ejs')

app.set('views', [path.join(__dirname, 'views'),
path.join(__dirname, 'views/Profile')


]);

app.use(express.static(__dirname + '/public'));

const dbConnect = () => {
    return new Promise ((resolve, rejects) => {
        pool.getConnection((err, conn) => {
            if (err)
            {
               rejects(err);
            }
            else
            {
                resolve(conn);
            }
        })
    })
};

app.get('/', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('home');
});

app.get('/grafikbar', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('grafikbar');
});

app.get('/graftakberarah', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('graftakberarah');
});

const getDataBook1 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book1`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}
const getDataBook2 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book2`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}
const getDataBook3 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book3`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}
const getDataBook4 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book4`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}
const getDataBook5 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book5`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}

app.get('/pencarian', async (req, res) => {
    const conn = await dbConnect();
    var book1= await getDataBook1(conn);
    conn.release();
    res.render('pencarian',{
        book1
    });
});
app.get('/pencarian2', async (req, res) => {
    const conn = await dbConnect();
    var book1= await getDataBook2(conn);
    conn.release();
    res.render('pencarian2',{
        book1
    });
});
app.get('/pencarian3', async (req, res) => {
    const conn = await dbConnect();
    var book1= await getDataBook3(conn);
    conn.release();
    res.render('pencarian3',{
        book1
    });
});
app.get('/pencarian4', async (req, res) => {
    const conn = await dbConnect();
    var book1= await getDataBook4(conn);
    conn.release();
    res.render('pencarian4',{
        book1
    });
});
app.get('/pencarian5', async (req, res) => {
    const conn = await dbConnect();
    var book1= await getDataBook5(conn);
    conn.release();
    res.render('pencarian5',{
        book1
    });
});

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
});

