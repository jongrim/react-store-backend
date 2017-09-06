module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0
      }
    }
  });

  return Movie;
};