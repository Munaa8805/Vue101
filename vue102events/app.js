const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "Hellow",
      confirmName: "",
    };
  },
  methods: {
    confirmNameInput() {
      // Updates the confirmed name with the current input name
      this.confirmName = this.name;
    },
    submitHandler(e) {
      // Prevents the default browser form submission behavior
      e.preventDefault();
      console.log("this.name", this.name);

      alert("HI");
    },
    signInHandler() {
      alert("HI sign in");
    },
    addCounter() {
      this.counter++;
    },
    reducerCounter() {
      this.counter--;
    },

    // Adds a dynamic value to the counter
    dynamicCounter(num) {
      this.counter = this.counter + num;
    },
    // Sets the name based on event input and a second argument
    setName(eve, lastName) {
      this.name = `${eve.target.value} ${lastName}`;
    },
  },
});

app.mount("#events");
