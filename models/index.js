const User = require('./User');
const Day = require('./day');


User.hasMany(Day, {
    foreignKey: 'user_id',
  });

Day.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User , Day };