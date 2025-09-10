import { Client } from "pg";

async function getUsers(email: string) {
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_CdlrvjxVY4J6@ep-morning-dream-adfupdww-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    })

    try {
        await client.connect();
        const getQuery = 'SELECT * FROM users WHERE email = $1'
        const values = [email];
        const res = await client.query(getQuery, values);

        if( res.rows.length > 0 ) {
            console.log('User Found', res.rows[0]);
            return res.rows[0];
        }
        else {
            console.log("No User Found With The Given Email");
            return null;
        }
    }
    catch (err) {
        console.log('Error while getting the output', err);
    }
    finally {
        await client.end();
    }
}

getUsers('example@gmail.com');