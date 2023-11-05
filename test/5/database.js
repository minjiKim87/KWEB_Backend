const mysql = require('mysql2/promise');
const pool = mysql.createPool({
host: '127.0.0.1',
port: 3306,
user: 'root',
password: '1234',
database: 'kweb_db',
});
const runQuery = async (sql, params) => { 
const conn = await pool.getConnection();
try {
const [result] = await conn.execute(sql, params);
return result;
} finally {
conn.release();
}
};
module.exports = { runQuery };