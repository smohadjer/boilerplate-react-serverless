import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  const jsonPath = path.join(process.cwd(), 'data', 'data.json');
  const jsonFile = fs.readFileSync(jsonPath, 'utf8');
  const json = JSON.parse(jsonFile);
  res.setHeader('Content-Type', 'application/json');
  return res.json(json);
}
