const { sequelize } = require('../models/index');

module.exports = () => {
  try {
    sequelize.sync();
  } catch (error) {
    throw error;
  }
};
