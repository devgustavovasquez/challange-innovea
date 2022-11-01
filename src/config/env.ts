export const env = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
});
