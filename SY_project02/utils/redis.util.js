const redis = require("redis");
const redisUtil = require("redis");
const redisClient = redis.createClient({
  url: process.env.REDIS_HOST_URL,
});
redisClient.on("connect", () => {
  console.info("Redis connected!");
});
redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});
// redisClient.connect();

module.exports = redisClient;
