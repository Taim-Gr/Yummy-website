const sql = require("better-sqlite3");
const db = sql("meals.db");

console.log("Clearing all meals from the database...");

// Delete all meals from the database
const result = db.prepare("DELETE FROM meals").run();

console.log(`Deleted ${result.changes} meal(s) from the database.`);
console.log("Database is now empty and ready for deployment.");

// Close the database connection
db.close();
