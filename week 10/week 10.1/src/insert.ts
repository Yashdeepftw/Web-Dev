import { Client } from "pg"

async function insertData(username: string, email: string, password: string) {
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_CdlrvjxVY4J6@ep-morning-dream-adfupdww-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    })

    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res);
    }
    catch (err) {
        console.log('Error during the insertion: ', err);
    }
    finally {
        await client.end();
    }
}

insertData('username1', 'example@gamil.com', '1234567').catch(console.error);