const fs = require('fs');
const { execSync } = require('child_process');

const popperUtils = 'node_modules/@popperjs/core/lib/utils';

if (process.env.POSTINSTALL_RUNNING) {
  // Avoid recursion when the script spawns npm.
  process.exit(0);
}

if (!fs.existsSync(popperUtils)) {
  console.log('Warning: @popperjs/core utils directory missing. Attempting to reinstall pinned version 2.11.8...');
  try {
    execSync('npm install @popperjs/core@2.11.8', {
      stdio: 'inherit',
      env: Object.assign({}, process.env, { POSTINSTALL_RUNNING: '1' })
    });
    console.log('@popperjs/core reinstallation complete.');
  } catch (err) {
    console.error('Failed to reinstall @popperjs/core. Please run: npm install @popperjs/core@2.11.8');
    process.exit(1);
  }
} else {
  // console.log('Popper utils folder exists.');
}
