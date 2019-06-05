import del from 'del';

async function clean() {
  await del(['build/*', '!build/.git'], { dot: true });
}

export default clean;
