export const config = {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'myuser',
    password: process.env.DB_PASSWORD || 'mypassword',
    name: process.env.DB_NAME || 'mydatabase',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'mysecretkey',
    expiration: process.env.JWT_EXPIRATION || 3600,
  },
  api: {
    key: process.env.API_KEY || 'myapikey',
    secret: process.env.API_SECRET || 'myapisecret',
  },
  logLevel: process.env.LOG_LEVEL || 'info',
};
