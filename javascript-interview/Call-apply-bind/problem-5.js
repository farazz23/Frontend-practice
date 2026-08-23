const logger = {
  prefix: "[APP]",

  log(message) {
    console.log(`${this.prefix} ${message}`);
  }
};

function executeTask(task, callback) {
  console.log(`Executing: ${task}`);
  callback("Task completed successfully");
}

const logResult = logger.log.bind(logger, "Task completed successfully")

executeTask("Database Migration", logResult);