
import { Pool } from "pg";

// Creating a new instance of Pool with the provided DATABASE_URL and enabling SSL for secure connections.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

// Function to handle GET requests.
export async function GET(req:Request, {params}:{params:{city:string}}) {
  // Acquiring a client from the pool.
  const client = await pool.connect();
  try {
    const city = String(params.city);

    const searchTerm = '%' + city + '%';

    const queryText = 'SELECT * FROM location WHERE city ILIKE $1'

    const { rows } = await client.query(queryText, [searchTerm]);

    // const { rows }  = await client.query("SELECT * FROM location");

    const headers = {
      'Access-Control-Allow-Origin': '*', // 允许所有来源跨域访问，也可以指定特定的来源
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS', // 允许的 HTTP 方法
      'Access-Control-Allow-Headers': 'Content-Type, Authorization', // 允许的请求头
      'Access-Control-Allow-Credentials': 'true', // 是否允许发送 Cookie
    };

    return new Response(JSON.stringify(rows), { status: 200,headers:headers });


  } finally {
    client.release(); // Releasing the client back to the pool.
  }
}