/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 *
 * node tasks.js batata
 *
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var createArray = text.split(" ");
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (createArray[0] === "hello" || text === "hello\n") {
    hello(text);
  } else if (text === "help\n") {
    help();
  } 
  // else if(createArray[0]==="remove\n"|| "remove"){
  //   remove(text,tasks)
  // }
   else if (createArray[0] === 'add') {
    add(text, tasks);
  } 
  else if (text === 'add\n' || text==='edit\n' || text==='check\n' || text==='uncheck\n') {
    error();
  }
  else if (createArray[0] === 'edit') {
    edit(text, tasks);
  } 
  else if (createArray[0] === 'check') {
    check(text,tasks);
  }
  else if (createArray[0] === 'uncheck') {
    uncheck(text,tasks);
  }
  else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */

function hello(t) {
  if (t === "hello\n") {
    console.log(t.replace("hello", "hello!"));
  } else {
    console.log(t.trim() + "!" + "\n");
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
/**
 * help users to check available command
 */
function help() {
  console.log(
    "Command lines:\n",
    "hello:returns hello! \n",
    "hello+text:returns hello and any text you write next to it!\n",
    "quit or exit: quits the application.\n",
    "add:allows to add a task.\n",
    "remove || remove n:allows to remove the last task || remove a specified task.\n",
    "help:help you understand all the commands\n",
    "check:add a done/undone (checked/unchecked) feature to our task list.\n",
    "uncheck:does the opposite of `check`.",
    "help:help you understand all the commands.\n",
  );
}

/**
 * Exits the application
 *
 * @returns {void}
 */


function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

var tasks = [
  "Task 1: Learn Node basics",
  "Task 2: Edit node.js task",
  "Task 3: Create Help Function",
  "Task 4: How to check and uncheck",
];
function add(item, tasks) {
  var itemN = item.substr(3, item.length);
  //console.log("\nitemN: "+itemN);
  tasks.push(itemN.trim());
  console.log("\n----Task created successfully----\n'write list to list all your tasks' \n")
}
function edit(item, tasks) {
  var arr = item.split(" ");
  if (arr[0] === 'edit' && arr[1] < tasks.length) {
    var task = tasks.splice(arr[1] - 1, 1, arr[2]);
    console.log("----the task number " + arr[1] + " has changed, check you list----");
  } else {
    task = tasks.splice(tasks.length - 1, 1, arr[1]);
    console.log("----the last task has changed, check you list----");
  }

}
// /**
//  * Exits the application
//  *
//  * @returns {void}
//  */
// function remove(item, tasks) {
//   var arr = item.split(" ");
//   if (item === "remove\n") {
//     var task = tasks.pop();
//     console.log("----" + task + " removed, check your list----\n");
//   } else if (arr[1] > tasks.length) {
//     console.log("You enter a wrong number, your list has only " + tasks.length + " tasks");
//     error();
//   } else {
//     task = tasks.splice(arr[1] - 1, 1);
//     console.log("----item " + arr[1] + " removed, check your list---\n");
//   }
// }
// /**
//  * Exits the application
//  *
//  * @returns {void}
//  */
function check (item,tasks){
  //console.log(tasks[1]+"[✓]");
var arr=item.split(" ");
if ( arr[1]<tasks.length){
  var reserve=tasks[arr[1]-1];
  var task=tasks.splice(arr[1]-1,1,reserve+"[✓]");
 console.log("----some tasks are done, please check your list----");
}else{
  console.log(tasks[arr[1]]);
}
}
function uncheck(item, tasks) {
  var arr = item.split(" ");
  if (arr[1] < tasks.length) {
    var reserve = tasks[arr[1] - 1];
    var task = tasks.splice(arr[1] - 1, 1, reserve.replace("[✓]", ""));
    console.log("----task"+task+" unmarked----");
  } else {
    console.log("----invalid task number----");
  }
}


function error() {
  console.log("\n----ERROR TRY AGAIN----\n");
}
// The following line starts the application
startApp("Mahdi Halloum")
