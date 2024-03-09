import client from './_db.js';

export default async (req, res) => {
    try {
        await client.connect();
        const database = client.db('boilerplate-react-serverless');
        const collection = database.collection('fruits');
        if (req.method === 'GET') {
			const data = await collection.find({}).limit(100).toArray();
			res.json(data);
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
