const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    // Watcher: Executes logic when the 'name' property changes
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + "Hello world";
      }
    },
    // Watcher: Executes logic when 'lastName' changes
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    },
  },
  computed: {
    // Computed Property: Automatically updates when dependencies (this.name) change
    fullname() {
      console.log("Running again ...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Hi world";
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Hi world";
    },
    // Updates the name property from the input event
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
