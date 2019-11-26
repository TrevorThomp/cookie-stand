'use strict';

// Constructor Function
function City(location, minCustomers, maxCustomers, averageCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
}

// Global Variables
const storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
const controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
let locationArray = [];
let sumArray = [];

// Dynamically creates table header based on storeHours
let createTableHeader = () => {
  const tableHeader = $('<thead/>');
  const tableBody= $('<tbody/>');
  tableBody.attr('id', 'table-body');
  const table = $('<table/>');
  table.attr('id', 'table');
  table.append(tableHeader);
  table.append(tableBody);
  var th = $('<th/>');
  th.text(' ');
  var row = $('<tr/>');
  row.append(th);
  $('#container').append(table);
  tableHeader.append(row);
  for(let i = 0; i < storeHours.length; i++) {
    th = $('<th/>');
    th.text(storeHours[i]);
    row.append(th);
  }
  th = $('<th/>');
  th.text('Daily Location Total');
  row.append(th);
};

// Dynamically creates table footer that calculates column totals
let createTableFooter = () => {
  const tableFooter = $('<tfoot/>');
  const row = $('<tr/>');
  let td = $('<td/>');
  $('#table').append(tableFooter);
  tableFooter.append(row);
  row.append(td);
  td.addClass('table-location');
  td.text('Totals');
  //Loops through and calculates columns by class then stores in bottom row
  let dailyLocationSum = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let sumValue = 0;

    for (let j = 0; j < locationArray.length; j++) {
      dailyLocationSum += parseInt($('.sum')[j].textContent);
      sumValue += parseInt($(`.${[i]}`)[j].textContent);
    }
    td = $('<td/>');
    td.addClass('colTotals');
    td.text(sumValue);
    row.append(td);
    sumArray.push(sumValue);
  }
  td = $('<td/>');
  td.text(dailyLocationSum.toLocaleString());
  row.append(td);
  sumArray.push(dailyLocationSum);
};

// Function that deletes the <tfoot> element
function delFooter() {
  $('tfoot').remove();
}

//Dynamic Form
$('#main-form').on('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var location = e.target.location.value;
  var minCustomers = e.target.minCustomers.value;
  var maxCustomers = e.target.maxCustomers.value;
  var avgCookies = e.target.avgCookies.value;
  var newCity = new City(location, minCustomers, maxCustomers, avgCookies);
  newCity.randomNumCustomer();
  newCity.cookiesPurchased();
  newCity.totalSum();
  newCity.render();
  delFooter();
  createTableFooter();
}

// Object prototype methods
City.prototype.randomNumCustomer = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

City.prototype.cookiesPurchased = function () {
  let result = [];
  for (let i = 0; i < storeHours.length; i++) {
    result.push(Math.floor((this.randomNumCustomer() * controlCurve[i]) * this.averageCookies));
  }
  return result;
};

City.prototype.totalSum = function () {
  let cookieSum = 0;
  for (let i = 0; i < storeHours.length; i++) {
    cookieSum += this.cookiesPurchased()[i];
  }
  return cookieSum;
};

City.prototype.render = function() {
  const row = $('<tr/>');
  let td = $('<td/>');
  let cityArray = [];
  $('#table-body').append(row);
  row.append(td);
  td.addClass('table-location');
  td.text(`${this.location}`);

  for (let i = 0; i < storeHours.length; i++) {
    td = $('<td/>');
    let storage = this.cookiesPurchased()[i];
    td.addClass(`${[i]}`);
    td.text(storage);
    row.append(td);
    cityArray.push(storage);
  }
  td = $('<td/>');
  td.addClass('sum');
  td.text(this.totalSum());
  row.append(td);
  locationArray.push(cityArray);
};

// Default data placed into constructor function
let seattle = new City('Seattle', 23, 100, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3 );
let lima = new City('Lima', 2, 16, 4.6);

// Self-invoked function to render table data
(function displayLists() {
  createTableHeader();
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
  createTableFooter();
})();
