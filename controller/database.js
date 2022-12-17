import mysql from 'mysql';
const pool = mysql.createPool({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'gameofthrones',
    dateStrings: true,
    connectionLimit: 10
});
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
export { dbConnect as db };
