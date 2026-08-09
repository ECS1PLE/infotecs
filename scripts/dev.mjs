import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const root = path.dirname(path.dirname(currentFile));
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const services = [
  {
    name: 'frontend',
    cwd: path.join(root, 'frontend'),
    args: ['run', 'start']
  },
  {
    name: 'backend',
    cwd: path.join(root, 'backend'),
    args: ['run', 'dev']
  }
];

const children = [];
let stopping = false;

function stop(exitCode = 0) {
  if (stopping) {
    return;
  }

  stopping = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }

  process.exitCode = exitCode;
}

for (const service of services) {
  const child = spawn(npmCommand, service.args, {
    cwd: service.cwd,
    stdio: 'inherit',
    env: process.env
  });

  children.push(child);

  child.on('error', (error) => {
    process.stderr.write(`\n${service.name} failed to start: ${error.message}\n`);
    stop(1);
  });

  child.on('exit', (code) => {
    if (!stopping && code !== 0) {
      process.stderr.write(`\n${service.name} stopped with code ${code ?? 1}\n`);
      stop(code ?? 1);
    }
  });
}

process.stdout.write('\VAVILOV/ development\nFrontend: http://localhost:4200\nBackend:  http://localhost:3100\nHealth:   http://localhost:3100/api/health\n\n');

process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));
