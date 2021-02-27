require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8080,
  mongo: {
    connectionString: process.env.MONGO_CONNECTION_STRING,
    maxLimit: 100,
  },
}
