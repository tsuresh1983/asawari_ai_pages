import fs from 'fs';
import path from 'path';

const outDir = path.resolve('../docs');

if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'CNAME'), 'www.asawari.ai');
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('CNAME and .nojekyll added successfully!');
}
