'use strict';

function Location(location, minCustomers, maxCustomers, averageCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
};

Location.prototype.storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

Location.prototype.randomNumCustomer = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

Location.prototype.cookiesPurchased = function () {
    var result = [];
    for (var i = 0; i < this.storeHours.length; i++) {
        result.push(Math.floor(this.randomNumCustomer() * this.averageCookies));
    }
    return result;
};

Location.prototype.totalSum = function () {
    var cookieSum = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
        cookieSum += this.cookiesPurchased()[i];
    }
    return cookieSum.toLocaleString();
};

Location.prototype.render = function() {
    var section = document.getElementById('container');
    var ul = document.createElement('ul');
    var div = document.createElement('div');
    div.className = 'cookies';
    div.innerHTML = `<h2>${this.location}</h2>`;
    section.appendChild(div);
    div.appendChild(ul);
    for (var i = 0; i < this.storeHours.length; i++) {
        var li = document.createElement('li');
        li.textContent = `
        ${this.storeHours[i]}: ${this.cookiesPurchased()[i]} cookies
        `;
        ul.appendChild(li);
    }
    li = document.createElement('li')
    li.textContent = `Total: ${this.totalSum()} cookies`;
    ul.appendChild(li);
}

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3 );
var lima = new Location('Lima', 2, 16, 4.6);
console.log(seattle);

function displayLists() {
    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();
}

displayLists();
