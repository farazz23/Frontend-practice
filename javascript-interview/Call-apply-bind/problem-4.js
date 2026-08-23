const session = {
  username: "Damon",
  timeout: 3000,

  start() {
    console.log(`${this.username} started a session`);

    setTimeout(function () {
      console.log(
        `${this.username}'s session expired after ${this.timeout} ms`
      );
    }.bind(this), this.timeout);
  }
}

//! The current code doesn't reliably produce that output, because this inside the setTimeout callback is not the same this as inside start().
session.start()
