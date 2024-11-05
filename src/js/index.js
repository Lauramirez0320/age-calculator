let birthdayDay;
let birthdayMonth;
let birthdayYear;

function getBirthDate(element) {
  switch (element.id) {
    case "day":
      birthdayDay = element.value;
      break;
    case "month":
      birthdayMonth = element.value;
      break;
    case "year":
      birthdayYear = element.value;
      break;
    default:
      break;
  }
}
let isInputEmpty =
  birthdayDay === "" || birthdayMonth === "" || birthdayYear === "";


function validatedData() {
  let invalidDay = isNaN(birthdayDay) || birthdayDay < 1 || birthdayDay > 31;
let invalidMonth =
  isNaN(birthdayMonth) || birthdayMonth < 1 || birthdayMonth > 12;

let invalidYear =
  isNaN(birthdayYear) || birthdayYear < 1900 || birthdayYear > 3000;

let isInputValid = !invalidDay && !invalidMonth && !invalidYear;

  const errorUl = document.getElementById("error-validation").classList;

  const dayInput = document.getElementById("day").classList;
  const monthInput = document.getElementById("month").classList;
  const yearInput = document.getElementById("year").classList;

  if (invalidDay) {
    const li = document.createElement("li");
    errorUl.add("show-error");
    dayInput.add("show-error");
    const errorDayMessage = document.createTextNode(
      "Ingresa un día entre 1 y 31."
    );
    li.appendChild(errorDayMessage);
    document.getElementById("error-validation").appendChild(li);
  } else {
    errorUl.remove("show-error");
    dayInput.remove("show-error");
  }

  if (invalidMonth) {
    const li = document.createElement("li");
    errorUl.add("show-error");
    monthInput.add("show-error");
    const errorMonthMessage = document.createTextNode(
      "Ingresa un mes entre 1 y 12."
    );
    li.appendChild(errorMonthMessage);
    document.getElementById("error-validation").appendChild(li);
  } else {
    errorUl.remove("show-error");
    dayInput.remove("show-error");
  }

  if (invalidYear) {
    const li = document.createElement("li");
    errorUl.add("show-error");
    yearInput.add("show-error");
    const errorYearMessage = document.createTextNode("Ingresa un año válido");
    li.appendChild(errorYearMessage);
    document.getElementById("error-validation").appendChild(li);
  } else {
    errorUl.remove("show-error");
    dayInput.remove("show-error");
  }

  if (isInputValid) {
    showResultData(birthdayDay, birthdayMonth, birthdayYear);
  }
}

function getDate() {
  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  return { currentDay, currentMonth, currentYear };
}

function getLeapYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeap;
}

function showResultData(birthdayDay, birthdayMonth, birthdayYear) {
  const daySpan = document.getElementById("show-day").children[0];
  const monthSpan = document.getElementById("show-month").children[0];
  const yearSpan = document.getElementById("show-year").children[0];

  const newDayNode = document.createTextNode(birthdayDay);
  const newMonthNode = document.createTextNode(birthdayMonth);
  const newYearNode = document.createTextNode(birthdayYear);

  daySpan.replaceChild(newDayNode, daySpan.firstChild);
  monthSpan.replaceChild(newMonthNode, monthSpan.firstChild);
  yearSpan.replaceChild(newYearNode, yearSpan.firstChild);
}

function calculateAge() {
  const { currentDay, currentMonth, currentYear } = getDate();

  if (!isInputEmpty) {
    validatedData();
  }
}
