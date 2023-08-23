const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');



Traveller.belongsToMany(Location, { through: 'Trip' });
Location.belongsToMany(Traveller, { through: 'Trip' });


module.exports = { Traveller, Location, Trip };