const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const User = sequelize.define(
  'user',
  {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(11),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

async function main() {
  await User.sync();
  const user = await User.create({
    username: 'amir',
    password: 'admin1234',
  });
  console.log(user.dataValues);
}
main();
