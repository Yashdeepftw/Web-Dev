import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgressql://postgres:yashdeep_0218@localhost:5432/Todos");
    await client.connect();
    return client;
}