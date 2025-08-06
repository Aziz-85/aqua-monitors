// tools/hash.js
const bcrypt = require("bcryptjs");

const password = "Aziz"; // غيّرها إذا تحب
const hash = bcrypt.hashSync(password, 10);
console.log("Hashed password:", hash);
