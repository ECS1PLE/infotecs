import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const root = path.dirname(path.dirname(currentFile));

function portStatus(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', () => resolve('BUSY'));
    server.once('listening', () => {
      server.close(() => resolve('FREE'));
    });

    server.listen(port, '127.0.0.1');
  });
}

const envPath = path.join(root, 'backend', '.env');
const nodeMajor = Number(process.versions.node.split('.')[0]);
const frontendPort = await portStatus(4200);
const backendPort = await portStatus(3100);

process.stdout.write(`Node: ${process.versions.node} ${nodeMajor >= 22 ? 'OK' : 'UPDATE REQUIRED'}\n`);
process.stdout.write(`backend/.env: ${fs.existsSync(envPath) ? 'OK' : 'MISSING'}\n`);
process.stdout.write(`Port 4200: ${frontendPort}\n`);
process.stdout.write(`Port 3100: ${backendPort}\n`);
