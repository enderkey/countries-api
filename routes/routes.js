const totoro = require('totoro-node');
const countries = require('../controllers/countries');

const router = (app) => {
  app.use('/', totoro.rain({
    v1: {
      active: true,
      deprecated: false,
      endpoints: [{
        route: '/countries',
        method: 'GET',
        active: true,
        deprecated: false,
        implementation: countries.get,
      }],
    },
  }));
};

module.exports = router;
