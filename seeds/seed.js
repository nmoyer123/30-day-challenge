const sequelize = require('../config/connections');
const { User, Day } = require('../models');
const userData = require('./userData.json');  
const dayData = require('./projectData.json');  


const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });


        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });


        // Attach user_id to each day data entry
        const updatedDayData = dayData.map((day, index) => ({
            ...day,
            user_id: users[0].id,  
            day: index + 1
        }));


        await Day.bulkCreate(updatedDayData);


        console.log('All data successfully seeded');
        process.exit(0);
    } catch (err) {
        console.error('Failed to seed database:', err);
        process.exit(1);
    }
};


seedDatabase();