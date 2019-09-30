'use strict';

var seattle = {
    location: 'seattle',
    minCustomers: 23,
    maxCustomers: 65,
    averageCookies: 6.3,
    storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    randomNumCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    },
    cookiesPurchased: function () {
        var result = [];
        
        for (var i = 0; i < 16; i++) {
            result.push(Math.floor(this.randomNumCustomer() * this.averageCookies)  + ' cookies')
        }
        return result
    },
    render: function() {
        var section = document.getElementById('container')
        var ul = document.createElement('ul');
        ul.className = 'cookies';
        ul.innerHTML = `<h2>${this.location.toUpperCase()}</h2>`
        section.appendChild(ul)
        for (var i = 0; i < 14; i++) {
            var li = document.createElement('li')
            li.textContent = `
            ${this.storeHours[i]}: ${this.cookiesPurchased()[i]}
            `;
        ul.appendChild(li);
        console.log(li)
    }
    }
}

var tokyo = {
    location: 'tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    averageCookies: 1.2,
    storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    randomNumCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    },
    cookiesPurchased: function () {
        var result = [];
        for (var i = 0; i < 16; i++) {
            result.push(Math.floor(this.randomNumCustomer() * this.averageCookies)  + ' cookies')
        }
        return result
    },
    render: function() {
        var section = document.getElementById('container')
        var ul = document.createElement('ul');
        ul.className = 'cookies';
        ul.innerHTML = `<h2>${this.location.toUpperCase()}</h2>`
        section.appendChild(ul)
        for (var i = 0; i < 14; i++) {
            var li = document.createElement('li')
            li.textContent = `
            ${this.storeHours[i]}: ${this.cookiesPurchased()[i]}
            `;
        ul.appendChild(li);
        console.log(li)
    }
    }
}

var dubai = {
    location: 'dubai',
    minCustomers: 11,
    maxCustomers: 38, 
    averageCookies: 3.7,
    storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    randomNumCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    },
    cookiesPurchased: function () {
        var result = [];
        for (var i = 0; i < 16; i++) {
            result.push(Math.floor(this.randomNumCustomer() * this.averageCookies)  + ' cookies')
        }
        return result
    },
    render: function() {
        var section = document.getElementById('container')
        var ul = document.createElement('ul');
        ul.className = 'cookies';
        ul.innerHTML = `<h2>${this.location.toUpperCase()}</h2>`
        section.appendChild(ul)
        for (var i = 0; i < 14; i++) {
            var li = document.createElement('li')
            li.textContent = `
            ${this.storeHours[i]}: ${this.cookiesPurchased()[i]}
            `;
        ul.appendChild(li);
        console.log(li)
    }
    }
}

var paris = {
    location: 'paris',
    minCustomers: 20,
    maxCustomers: 38,
    averageCookies: 2.3,
    storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    randomNumCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    },
    cookiesPurchased: function () {
        var result = [];
        for (var i = 0; i < 16; i++) {
            result.push(Math.floor(this.randomNumCustomer() * this.averageCookies)  + ' cookies')
        }
        return result
    },
    render: function() {
        var section = document.getElementById('container')
        var ul = document.createElement('ul');
        ul.className = 'cookies';
        ul.innerHTML = `<h2>${this.location.toUpperCase()}</h2>`
        section.appendChild(ul)
        for (var i = 0; i < 14; i++) {
            var li = document.createElement('li')
            li.textContent = `
            ${this.storeHours[i]}: ${this.cookiesPurchased()[i]}
            `;
        ul.appendChild(li);
        console.log(li)
    }
    } 
}

var lima = {
    location: 'lima',
    minCustomers: 2,
    maxCustomers: 16,
    averageCookies: 4.6,
    storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    randomNumCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    },
    cookiesPurchased: function () {
        var result = [];
        for (var i = 0; i < 16; i++) {
            result.push(Math.floor(this.randomNumCustomer() * this.averageCookies)  + ' cookies')
        }
        return result
    },
    render: function() {
        var section = document.getElementById('container')
        var ul = document.createElement('ul');
        ul.className = 'cookies';
        ul.innerHTML = `<h2>${this.location.toUpperCase()}</h2>`
        section.appendChild(ul)
        for (var i = 0; i < 14; i++) {
            var li = document.createElement('li')
            li.textContent = `
            ${this.storeHours[i]}: ${this.cookiesPurchased()[i]}
            `;
        ul.appendChild(li);
        console.log(li)
    }
    }
}

function displayLists() {
    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();
}

displayLists();