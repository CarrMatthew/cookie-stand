'use strict';

var storeHours = ['6am', '7am','8am','9am','10am','11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  location:'1st and Pike',
  minCustomers:23,
  maxCustomers:65,
  avg:6.3,
  customersPerHour:[],
  cookiesPerHour:[],
  totalCustomers:0,
  totalCookies:0,
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesPerHour[i] + this.totalCookies;
    }
  },
  render: function(){
    var header = document.getElementById('pike_header'); 
    var list = document.getElementById('pike_list');
    if (list != undefined && header != undefined) {
      header.textContent = this.location;
      for(var i = 0; i < storeHours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        list.appendChild(listItem);
      }
      var listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalCookies + ' cookies';
      list.appendChild(listItem);
    }
  }
};

var seaTac = {
  location:'SeaTac Airport',
  minCustomers:3,
  maxCustomers:24,
  avg:1.2,
  customersPerHour:[],
  cookiesPerHour:[],
  totalCustomers:0,
  totalCookies:0,
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesPerHour[i] + this.totalCookies;
    }
  },
  render: function(){
    var header = document.getElementById('seatac_header'); 
    var list = document.getElementById('seatac_list');
    if (list != undefined && header != undefined) {
      header.textContent = this.location;
      for(var i = 0; i < storeHours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        list.appendChild(listItem);
      }
      var listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalCookies + ' cookies';
      list.appendChild(listItem);
    }
  }
};

var seattleCenter = {
  location:'Seattle Center',
  minCustomers:11,
  maxCustomers:38,
  avg:3.7,
  customersPerHour:[],
  cookiesPerHour:[],
  totalCustomers:0,
  totalCookies:0,
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesPerHour[i] + this.totalCookies;
    }
  },
  render: function(){
    var header = document.getElementById('seacenter_header'); 
    var list = document.getElementById('seacenter_list');
    if (list != undefined && header != undefined) {
      header.textContent = this.location;
      for(var i = 0; i < storeHours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        list.appendChild(listItem);
      }
      var listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalCookies + ' cookies';
      list.appendChild(listItem);
    }
  }
};

var capHill = {
  location:'Capitol Hill',
  minCustomers:20,
  maxCustomers:38,
  avg:2.3,
  customersPerHour:[],
  cookiesPerHour:[],
  totalCustomers:0,
  totalCookies:0,
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesPerHour[i] + this.totalCookies;
    }
  },
  render: function(){
    var header = document.getElementById('cap_hill_header'); 
    var list = document.getElementById('cap_hill_list');
    if (list != undefined && header != undefined) {
      header.textContent = this.location;
      for(var i = 0; i < storeHours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        list.appendChild(listItem);
      }
      var listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalCookies + ' cookies';
      list.appendChild(listItem);
    }
  }
};

var alki = {
  location:'Alki',
  minCustomers:2,
  maxCustomers:16,
  avg:4.6,
  customersPerHour:[],
  cookiesPerHour:[],
  totalCustomers:0,
  totalCookies:0,
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesPerHour[i] + this.totalCookies;
    }
  },
  render: function(){
    var header = document.getElementById('alki_header'); 
    var list = document.getElementById('alki_list');
    if (list != undefined && header != undefined) {
      header.textContent = this.location;
      for(var i = 0; i < storeHours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        list.appendChild(listItem);
      }
      var listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalCookies + ' cookies';
      list.appendChild(listItem);
    }
  }
};

pike.makeCustomers();
pike.render();

seaTac.makeCustomers();
seaTac.render();

seattleCenter.makeCustomers();
seattleCenter.render();

capHill.makeCustomers();
capHill.render();

alki.makeCustomers();
alki.render();