module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    updatedAt: DataTypes.DATE
  }, {
    timestamps: false
  });
  return Burger;
};
