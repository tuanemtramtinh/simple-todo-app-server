const todoApiRoute = require('./todo.api.route');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello');
  })

  app.use('/api/todo', todoApiRoute);
}