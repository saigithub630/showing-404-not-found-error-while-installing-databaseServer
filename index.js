const express = require("express");
const path = require("path");

const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const dbPath = path.join(__dirname, "goodreads.db");

let db = null;

const initializeDataBase = () => {
  try {
    db = open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("server is running on https://localhost:3000.com");
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

initializeDataBase();
