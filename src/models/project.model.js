const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const Project = sequelize.define(
  'projects',
  {
    project_name: {
      type: DataTypes.STRING(50),
      acceptsNull: false,
    },
  },
  { timestamps: true, freezeTableName: true }
);

module.exports = {
  ProjectModel: Project,
};
