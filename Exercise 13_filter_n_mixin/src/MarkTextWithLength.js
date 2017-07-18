export const MarkTextWithLength = {
  data() {
    return {
      someText: 'some text here.'
    }
  },
  computed: {
      markedText: function() {
        return this.someText + ' (' + this.someText.length + ')';
      }
  }
};
