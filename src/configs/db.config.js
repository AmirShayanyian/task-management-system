const { Sequelize } = require('@sequelize/core');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 4942,
  username: 'root',
  password: '',
  database: 'task-manager-db',
});

sequelize.sync({ alter: true });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((error) => {
    console.log('Error:', error?.message);
  });

module.exports = sequelize;