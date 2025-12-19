const app = Vue.createApp({
  // Data function returns the reactive state of the application
  data: function () {
    return {
      courseGoalA: "Finish the course",
      courseGoalB: "Hell world",
      courseGoalC: "<h3>This is HTML from data.</h3>",
      vueLink: "https://vuejs.org/guide/essentials/application.html",
    };
  },
  methods: {
    // Methods allow us to execute logic, often triggered by events
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue";
      } else {
        return this.courseGoalB;
      }
    },
  },
});

// Mounts the Vue application to the DOM element with id 'user-goal'
app.mount("#user-goal");
