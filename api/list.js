import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dirPath = path.join(process.cwd(), 'fichiers');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.txt'));
  res.status(200).json(files);
}
