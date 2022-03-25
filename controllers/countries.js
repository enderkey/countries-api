const get = (apiVersion, req, res) => res.status(200).json([{ name: 'Uruguay' }]);

module.exports = { get };
