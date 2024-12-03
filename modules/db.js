import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri)

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('network-map');
         console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err)
        process.exit(1);
    }
}

function getDB() {
    if (!db) throw new Error('Database not initialized.');
    return db;
}

export {connectDB, getDB};