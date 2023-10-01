/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: "GOOGLE_CLIENT_ID",
    GOOGLE_CLIENT_SECRET: "GOOGLE_CLIENT_SECRET",
    OPENAI_API_KEY: 'OPENAI_API_KEY',
    BACKEND: 'https://el-yoh5.onrender.com',
  },
};

module.exports = nextConfig;