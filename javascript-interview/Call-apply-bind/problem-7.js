const sessionManager = {
  username: "Damon",
  timeout: 2000,

  expire() {
    console.log(
      `${this.username}'s session expired`
    );
  },

  // dont use the arrow functionm here because the arrow function doesn't have their own this , it returns the windows object
  start() {
    setTimeout( function(){
      console.log(
        `${this.username}'s session expired`
      );
    }.bind(this), this.timeout);
  }
};

sessionManager.start()