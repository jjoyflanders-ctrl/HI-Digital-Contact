
const employee = {
  first_name:"Jessica",
  last_name:"Flanders",
  title:"E-commerce & Inventory Administrator",
  photo:"https://via.placeholder.com/800"
};

document.getElementById("deskName").textContent =
  employee.first_name + " " + employee.last_name;

document.getElementById("deskTitle").textContent = employee.title;

document.getElementById("mobiName").textContent =
  employee.first_name + " " + employee.last_name;

document.getElementById("mobiTitle").textContent = employee.title;

document.getElementById("deskPhoto").src = employee.photo;
document.getElementById("mobiPhoto").src = employee.photo;
