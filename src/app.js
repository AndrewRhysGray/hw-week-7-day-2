import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {


      items: [

          { name: "Bacon", isPurchased: false},
          { name:"Rolls", isPurchased: true},
          { name: "Egg", isPurchased: false }
        ],
        newItem: { name: "", isDone: false }
      },
      methods: {
        saveNewItem: function () {
          this.items.push(this.newItem);
          this.newItem = { name: "", isDone: false };
        },
        doneItem: function(index) {
          this.items[index].isDone = true;
        }
      }
    });
  });
