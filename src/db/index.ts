const { Pool } =require("pg");
const { drizzle }=require("drizzle-orm/node-postgres");
const  { env }=require("../config/env");

const pool = new Pool({
  connectionString: env.DATABASE_CONNECTION,
  ssl: true,
});

export const db = drizzle(pool);
