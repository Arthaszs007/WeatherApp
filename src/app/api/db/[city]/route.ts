
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

    
    return new Response(JSON.stringify(rows), { status: 200 });


  } finally {
    client.release(); // Releasing the client back to the pool.
  }
}