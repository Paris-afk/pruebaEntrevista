const express = require("express");

const response = require("../../../network/response.js");
const Controller = require("./index");
const router = express.Router();

router.get("/", getEmployees);
router.get("/department", getEmployeesbyDepartment);
router.get("/salary", getEmployeesbySalary);

async function getEmployees(req, res) {
  try {
    const lista = await Controller.getEmployees();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}
async function getEmployeesbyDepartment(req, res) {
  try {
    const lista = await Controller.getEmployeesbyDepartment();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function getEmployeesbySalary(req, res) {
  try {
    const lista = await Controller.getEmployeesbySalary();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

module.exports = router;
