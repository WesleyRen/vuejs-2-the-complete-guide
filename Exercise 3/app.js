new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result: function() {
            return (this.value > 37) ? "done" : "not there yet";
          }
        },
        watch: {
          value: function(v) {
            var vm = this;
            if (vm.value > 37) {
              setTimeout(function() {
                vm.value = 0;
              }, 2000);
            }
          }
        }
    });
