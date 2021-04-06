module.exports = function (injectedStore) {
  let store = injectedStore;

  function getEmployees() {
    return store.getEmployees();
  }
  function getEmployeesbyDepartment() {
    return store.getEmployeesbyDepartment();
  }
  function getEmployeesbySalary() {
    return store.getEmployeesbySalary();
  }

  return {
    getEmployees,
    getEmployeesbyDepartment,
    getEmployeesbySalary,
  };
};
