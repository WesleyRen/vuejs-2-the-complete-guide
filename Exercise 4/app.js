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
    progressPct: 0,
    myStyle: {
        width: '100px',
        height: '50px',
        border: 'black solid',
        backgroundColor: ''
    },
    progressBox:  {
      width: '300px',
      height: '20px',
      backgroundColor: '',
      border: '1px solid black'
    }
  },
  computed: {
    divClass1: function() {
      return {
        highlight: this.isHighlighted,
        shrink: this.isShrunk
      };
    },
    progressBar: function() {
      return {
        width: this.progressPct + '%',
        height: this.progressBox.height,
        backgroundColor: 'purple',
        border: this.progressBox.border
      }
    }
  },
  watch: {
    // stop progress bar with it reaches 90% of the page width.
    progressPct: function() {
      var vm = this;
      if (vm.progressPct >= 100)
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
