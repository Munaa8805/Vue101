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
      this.confirmName = this.name;
    },
    submitHandler(e) {
      e.preventDefault();

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

    dynamicCounter(num) {
      this.counter = this.counter + num;
    },
    setName(eve, lastName) {
      this.name = `${eve.target.value} ${lastName}`;
    },
  },
});

app.mount("#events");
