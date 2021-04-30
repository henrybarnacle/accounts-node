const Pool = require('pg').Pool
const pool = new Pool({
  user: 'app_dev',
  host: 'localhost',
  database: 'app_dev',
  password: 'e1bc9e7f864d',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  module.exports = {
    getUsers
  }
// spring.datasource.url=jdbc:postgresql://localhost:5432/app_dev
// spring.datasource.username=app_dev
// spring.datasource.password=e1bc9e7f864d

// spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
// spring.jpa.show-sql=false
// spring.jpa.hibernate.ddl-auto=update