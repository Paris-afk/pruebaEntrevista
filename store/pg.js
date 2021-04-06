const { Pool, Client, pg, Connection } = require("pg");
const config = require("../config");
//data base settings
const dbconf = {
  user: config.pg.user,
  host: config.pg.host,
  database: config.pg.database,
  password: config.pg.password,
  port: config.pg.port,
  ssl: { rejectUnauthorized: false },
};
const client = new Client(dbconf);

//data base connection
function handleConnection() {
  client.connect((err) => {
    if (err) {
      console.log("db err", err);
      // setTimeout(handleConnection,2000);
    } else {
      console.log("DB Connected");
    }
  });
}

handleConnection();

function getEmployees() {
  return new Promise((resolve, reject) => {
    client.query(`SELECT * FROM employee order by id_employee`, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function getEmployeesbyDepartment() {
  return new Promise((resolve, reject) => {
    client.query(
      `Select * from department order by numberemployees desc;`,
      (err, data) => {
        if (err) {
          return reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
}
function getEmployeesbySalary() {
  return new Promise((resolve, reject) => {
    client.query(
      `Select * from employee order by salary desc limit 5;`,
      (err, data) => {
        if (err) {
          return reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
}
module.exports = {
  getEmployees,
  getEmployeesbyDepartment,
  getEmployeesbySalary,
};
