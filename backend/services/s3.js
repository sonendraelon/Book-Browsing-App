const AWS = require('aws-sdk');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET_NAME } = require('../config/config');

const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

async function uploadImageToS3(image) {
  const fileContent = fs.readFileSync(`uploads/${image}`);
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: `${uuidv4()}.jpg`,
    Body: fileContent,
    ContentType: 'image/jpeg',
  };
  const data = await s3.upload(params).promise();
  fs.unlinkSync(`uploads/${image}`);
  return data.Location;
}

async function deleteImageFromS3(imageUrl) {
  const key = imageUrl.split('/').pop();
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
  };
  await s3.deleteObject(params).promise();
}

module.exports = { uploadImageToS3, deleteImageFromS3 };