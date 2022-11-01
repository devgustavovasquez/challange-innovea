export const env = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  apiKey: process.env.NEWS_API_TOKEN,
});
