const countriesDA = require('../data_access/countries');

const get = async (apiVersion, req, res) => {
  const countries = await countriesDA.get({ filter: req.query });
  return res.status(200).json(countries);
};

module.exports = { get };
