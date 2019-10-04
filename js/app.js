'use strict';

function City(location, minCustomers, maxCustomers, averageCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
}

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
var locationArray = [];
var numberOfStores = 0;

var createTableHeader = function() {
  var tableHeader = document.createElement('thead');
  var tableBody= document.createElement('tbody');
  tableBody.setAttribute('id', 'table-body');
  var section = document.getElementById('container');
  var table = document.createElement('table');
  table.setAttribute('id', 'table');
  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  var th = document.createElement('th');
  th.textContent = ' ';
  var row = document.createElement('tr');
  row.appendChild(th);
  section.appendChild(table);
  tableHeader.appendChild(row);
  for(var i = 0; i < storeHours.length; i++) {
    th = document.createElement('th');
    th.textContent = storeHours[i];
    row.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  row.appendChild(th);
};

var createTableFooter = function() {
  var tableFooter = document.createElement('tfoot');
  var row = document.createElement('tr');
  var table = document.getElementById('table');
  var td = document.createElement('td');
  table.appendChild(tableFooter);
  tableFooter.appendChild(row);
  row.appendChild(td);
  td.setAttribute('class', 'table-location');
  td.textContent = 'Totals';
  //Loops through and calculates columns by class then stores in bottom row
  for (var i = 0; i < storeHours.length; i++) {
    var sumValue = 0;
    var dailyLocationSum = 0;
    var colValues = document.getElementsByClassName(`${[i]}`);
    var dailyValues = document.getElementsByClassName('sum');
    for (var j = 0; j < locationArray.length; j++) {
      dailyLocationSum += parseInt(`${dailyValues[j].textContent}`);
      sumValue += parseInt(`${colValues[j].textContent}`);
    }
    td = document.createElement('td');
    td.setAttribute('class', 'colTotals');
    td.textContent = `${sumValue}`;
    row.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = `${dailyLocationSum.toLocaleString()}`;
  row.appendChild(td);
};

//Dynamic Form
var form = document.getElementById('main-form');

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

  numberOfStores++;
}

form.addEventListener('submit', submitForm);

City.prototype.randomNumCustomer = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

City.prototype.cookiesPurchased = function () {
  var result = [];
  for (var i = 0; i < storeHours.length; i++) {
    result.push(Math.floor((this.randomNumCustomer() * controlCurve[i]) * this.averageCookies));
  }
  return result;
};

City.prototype.totalSum = function () {
  var cookieSum = 0;
  for (var i = 0; i < storeHours.length; i++) {
    cookieSum += this.cookiesPurchased()[i];
  }
  return cookieSum;
};

City.prototype.render = function() {
  var row = document.createElement('tr');
  var tableBody = document.getElementById('table-body');
  var td = document.createElement('td');
  var cityArray = [];
  tableBody.appendChild(row);
  row.appendChild(td);
  td.setAttribute('class', 'table-location');
  td.textContent = `${this.location}`;

  for (var i = 0; i < storeHours.length; i++) {
    td = document.createElement('td');
    var storage = this.cookiesPurchased()[i];
    td.setAttribute('class', `${[i]}`);
    td.textContent = storage;
    row.appendChild(td);
    cityArray.push(storage);
  }
  td = document.createElement('td');
  td.setAttribute('class', 'sum');
  td.textContent = this.totalSum();
  row.appendChild(td);
  locationArray.push(cityArray);
  numberOfStores++;
};

var seattle = new City('Seattle', 23, 100, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3 );
var lima = new City('Lima', 2, 16, 4.6);

(function displayLists() {
  createTableHeader();
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
  createTableFooter();
})();
