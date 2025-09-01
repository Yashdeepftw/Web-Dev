import { Client } from 'pg';
const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_CdlrvjxVY4J6@ep-morning-dream-adfupdww-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});
client.connect();
async function createUsersTabel() {
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
            create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}
createUsersTabel();
