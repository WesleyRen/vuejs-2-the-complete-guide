new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          showAlert: function() {
            alert("haha");
          },
          updateValue: function(event) {
            this.value = event.target.value;
          }
        }
    });
