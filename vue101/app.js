const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Finish the course",
      courseGoalB: "Hell world",
      courseGoalC: "<h3>This is HTML from data.</h3>",
      vueLink: "https://vuejs.org/guide/essentials/application.html",
    };
  },
  methods: {
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

app.mount("#user-goal");
