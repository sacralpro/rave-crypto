import { Account, Client, ID, Databases, Query, Storage } from 'appwrite';

console.log('ID import:', ID); // Добавьте этот лог для проверки импорта


const client = new Client()
    .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL))
    .setProject(String(process.env.NEXT_PUBLIC_ENDPOINT));

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
const databases = new Databases(client);

export { client, account, database, storage, databases, Query, ID }



