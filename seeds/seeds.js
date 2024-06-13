const sequelize = require('../config/connections');
const { User, Day } = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const days = await Day.bulkCreate(dayData);

    console.log('All data successfully seeded');
    process.exit(0);
};


seedDatabase();