require("dotenv").config();
const { Client } = require("pg");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.CA_CERT,
  },
};

const connectToDatabase = async () => {
  const client = new Client(config);

  try {
    await client.connect();
    console.log("Connected to the database");
    return client;
  } catch (err) {
    console.error("Error connecting to the database", err.stack);
    throw err;
  }
};

module.exports = connectToDatabase;
