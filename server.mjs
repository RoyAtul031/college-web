import { dev } from 'astro';

const server = await dev({
  root: '.',
  server: {
    port: 4321,
    host: true
  }
});

console.log(`\n========================================`);
console.log(`  XAVATHON 2027 DEV SERVER READY`);
console.log(`  http://localhost:4321/`);
console.log(`========================================\n`);
