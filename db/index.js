const Pool = require ("pg").Pool;
const pool = new Pool({
    type: "postgres",
    username: "osmypqoxzhgfqi",
    password: "b450b1c99d51b2ba8fc1426e4dc9f2a5d33693225458d40b2a02bac9fd8ddeb9",
    host: "ec2-54-147-76-191.compute-1.amazonaws.com",
    port: 5432,
    database: "d5q53itg6c0uf0",
    connectionString: "postgres://osmypqoxzhgfqi:b450b1c99d51b2ba8fc1426e4dc9f2a5d33693225458d40b2a02bac9fd8ddeb9@ec2-54-147-76-191.compute-1.amazonaws.com:5432/d5q53itg6c0uf0",
      ssl: {
        rejectUnauthorized: 0
      },
})

module.exports = pool;
