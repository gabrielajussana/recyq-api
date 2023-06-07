const crypto = require('crypto');

function generateAppKeys() {
  const key1 = crypto.randomBytes(32).toString('hex');
  const key2 = crypto.randomBytes(32).toString('hex');
  return [key1, key2];
}

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: generateAppKeys(),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
