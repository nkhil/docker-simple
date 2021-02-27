const init = require('./src');
const { port } = require('./src/config');

(async () => {
  const app = await init();
  app.listen(port, () => console.log(`Listening on port ${port}`));
})();
