new Vue({
  el: '#exercise',
  data: {
    interval: 1000,
    interval2: 200,
    intervalVar2: -1,
    isHighlighted: true,
    isShrunk: false,
    color: "blue",
    border: "bold",
    divClass2: "",
    selectedClass: "",
    isBlue: "false",
    borderWidth: 10,
    progressPct: 0
  },
  computed: {
    divClass1: function() {
      return {
        highlight: this.isHighlighted,
        shrink: this.isShrunk
      }
    }
  },
  watch: {
    // stop progress bar with it reaches 90% of the page width.
    progressPct: function() {
      var vm = this;
      if (vm.progressPct >= 90)
        clearInterval(vm.intervalVar2);
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      vm.intervalVar = setInterval(function() {
        vm.isHighlighted = !vm.isHighlighted;
        vm.isShrunk = !vm.isShrunk;
      }, vm.interval);
    },
    startProgress: function() {
      var vm = this;
      vm.intervalVar2 = setInterval(function() {
        vm.progressPct += 5;
      }, vm.interval2);
    }
  }
});
