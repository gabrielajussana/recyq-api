module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','nvD0Xj+2I5qMRrGjIG2hzQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
