const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const User = sequelize.define(
  'user',
  {
    username: {
      allowNull: false,
      type: DataTypes.ENUM('amir','parsa','erfan'),
    },
    password: DataTypes.STRING,
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
  }
);

async function main() {
  await User.sync({ alter: true });
  const user = await User.create({
    username: 'amir',
    password: 'admin1234',
  });
  console.log(user.dataValues);
}
main();
