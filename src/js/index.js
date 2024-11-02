let birthdayDay;
let birthdayMonth;
let birthdayYear;

function getBirthDate(element) {
  switch (element.id) {
    case 'day':
      birthdayDay = element.value;
      break;
    case 'month':
      birthdayMonth = element.value;
      break;
    case 'year':
      birthdayYear = element.value;
      break;
    default:
      break;
  }
}

function getDate() {
  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  return { currentDay, currentMonth, currentYear };
}

function sum() {
  const { currentDay, currentMonth, currentYear } = getDate();

  if (currentDay > birthdayDay) {
    return currentDay + birthdayDay
  }
}
function getLeapYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return isLeap;
}

function showResultData (birthdayDay, birthdayMonth, birthdayYear) {
const daySpan = document.getElementById('show-day').children[0];
const monthSpan = document.getElementById('show-month').children[0];
const yearSpan = document.getElementById('show-year').children[0];

const newDayNode = document.createTextNode(birthdayDay);
const newMonthNode = document.createTextNode(birthdayMonth);
const newYearNode = document.createTextNode(birthdayYear);

daySpan.replaceChild(newDayNode, daySpan.firstChild);
monthSpan.replaceChild(newMonthNode, monthSpan.firstChild);
yearSpan.replaceChild(newYearNode, yearSpan.firstChild)
}

function calculateAge() {
  const { currentDay, currentMonth, currentYear } = getDate();
  console.log(birthdayDay, birthdayMonth, birthdayYear);
  showResultData(birthdayDay, birthdayMonth, birthdayYear)

}
// función es_bisiesto(año):
//     si (año % 4 == 0 y año % 100 != 0) o (año % 400 == 0):
//         retornar verdadero
//     retornar falso

// función calcular_edad(fecha_nacimiento, fecha_actual):
//     (año_nacimiento, mes_nacimiento, día_nacimiento) = fecha_nacimiento
//     (año_actual, mes_actual, día_actual) = fecha_actual
 
//     años = año_actual - año_nacimiento
//     meses = mes_actual - mes_nacimiento
//     días = día_actual - día_nacimiento

//     # Ajustar días y meses
//     si días < 0:
//         meses -= 1
//         # Obtener el número de días en el mes anterior
//         si mes_actual == 1:
//             días_del_mes_anterior = 31  # Diciembre
//         sino:
//             días_del_mes_anterior = 31  # Por defecto
//             si mes_actual == 3:
//                 días_del_mes_anterior = 28
//                 si es_bisiesto(año_actual):
//                     días_del_mes_anterior = 29
//             sino si mes_actual en [5, 7, 10, 12]:
//                 días_del_mes_anterior = 30

//         días += días_del_mes_anterior

//     si meses < 0:
//         meses += 12
//         años -= 1

//     retornar (años, meses, días)

// # Entrada de usuario
// fecha_nacimiento = (año_nacimiento, mes_nacimiento, día_nacimiento)
// fecha_actual = (año_actual, mes_actual, día_actual)

// edad = calcular_edad(fecha_nacimiento, fecha_actual)
// imprimir "La edad es: ", edad
