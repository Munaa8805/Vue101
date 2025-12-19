const app = Vue.createApp({
  data() {
    return {
      name: "",
      goals: [],
    };
  },

  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.goals.push(this.name);
      this.name = "";
    },
    setName(eve) {
      this.name = `${eve.target.value}`;
    },
    removeItem(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
