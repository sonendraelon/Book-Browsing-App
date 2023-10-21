module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/book-browsing-app',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    EMAIL_USERNAME: process.env.EMAIL_USERNAME || 'example@gmail.com',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || 'password',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'accessKeyId',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || 'secretAccessKey',
    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || 'book-browsing-app',
  };