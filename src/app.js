import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {


      items: [

          { name: "Take out trash", isDone: false},
          { name: "Buy groceries", isDone: true},
          { name: "Hose down driveway", isDone: false }
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
