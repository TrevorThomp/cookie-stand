'use strict';

var seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    averageCookies: 6.3,
    randomNumCustomer: function() {
        return Math.floor(Math.random() * 50)
    },
    cookiesPurchased: function () {
        return Math.floor(this.averageCookies * this.randomNumCustomer())
    }
}



var tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    averageCookies: 1.2,
    randomNumCustomer: function() {
        return Math.floor(Math.random() * 50)
    },
    cookiesPurchased: function () {
        return Math.floor(this.averageCookies * this.randomNumCustomer())
    }
}

var dubai = {
    minCustomers: 11,
    maxCustomers: 38, 
    averageCookies: 3.7,
    randomNumCustomer: function() {
        return Math.floor(Math.random() * 50)
    },
    cookiesPurchased: function () {
        return Math.floor(this.averageCookies * this.randomNumCustomer())
    }
}

var paris = {
    minCustomers: 20,
    maxCustomers: 38,
    averageCookies: 2.3,
    randomNumCustomer: function() {
        return Math.floor(Math.random() * 50)
    },
    cookiesPurchased: function () {
        return Math.floor(this.averageCookies * this.randomNumCustomer())
    }  
}

var lima = {
    minCustomers: 2,
    maxCustomers: 16,
    averageCookies: 4.6,
    randomNumCustomer: function() {
        return Math.floor(Math.random() * 50)
    },
    cookiesPurchased: function () {
        return Math.floor(this.averageCookies * this.randomNumCustomer())
    }
}