// /**
//  * Starts the application
//  * This is the function that is run when the app starts
//  *
//  * It prints a welcome line, and then a line with "----",
//  * then nothing.
//  *
//  * @param  {string} name the name of the app
//  * @returns {void}
//  */
// function startApp(name) {
//   process.stdin.resume();
//   process.stdin.setEncoding("utf8");
//   process.stdin.on("data", onDataReceived);
//   console.log(`Welcome to ${name}'s application!`);
//   console.log("--------------------");
// }

// /**
//  * Decides what to do depending on the data that was received
//  * This function receives the input sent by the user.
//  *
//  * For example, if the user entered
//  *
//  * node tasks.js batata
//  *
//  *
//  * The text received would be "batata"
//  * This function  then directs to other functions
//  *
//  * @param  {string} text data typed by the user
//  * @returns {void}
//  */
// function onDataReceived(text) {
//   var createArray = text.split(" ");
//   if (text === "quit\n" || text === "exit\n") {
//     quit();
//   } else if (createArray[0] === "hello" || text === "hello\n") {
//     hello(text);
//   } else if (text === "help\n") {
//     help();
//   } 
//   // else if(createArray[0]==="remove\n"|| "remove"){
//   //   remove(text,tasks)
//   // }
//    else if (createArray[0] === 'add') {
//     add(text, tasks);
//   } 
//   else if (text === 'add\n' || text==='edit\n' || text==='check\n' || text==='uncheck\n') {
//     error();
//   }
//   else if (createArray[0] === 'edit') {
//     edit(text, tasks);
//   } 
//   else if (createArray[0] === 'check') {
//     check(text,tasks);
//   }
//   else if (createArray[0] === 'uncheck') {
//     uncheck(text,tasks);
//   }
//   else {
//     unknownCommand(text);
//   }
// }

// /**
//  * prints "unknown command"
//  * This function is supposed to run when all other commands have failed
//  *
//  * @param  {string} c the text received
//  * @returns {void}
//  */
// function unknownCommand(c) {
//   console.log('unknown command: "' + c.trim() + '"');
// }

// /**
//  * Says hello
//  *
//  * @returns {void}
//  */

// function hello(t) {
//   if (t === "hello\n") {
//     console.log(t.replace("hello", "hello!"));
//   } else {
//     console.log(t.trim() + "!" + "\n");
//   }
// }

// /**
//  * Exits the application
//  *
//  * @returns {void}
//  */
// /**
//  * help users to check available command
//  */
// function help() {
//   console.log(
//     "Command lines:\n",
//     "hello:returns hello! \n",
//     "hello+text:returns hello and any text you write next to it!\n",
//     "quit or exit: quits the application.\n",
//     "add:allows to add a task.\n",
//     "remove || remove n:allows to remove the last task || remove a specified task.\n",
//     "help:help you understand all the commands\n",
//     "check:add a done/undone (checked/unchecked) feature to our task list.\n",
//     "uncheck:does the opposite of `check`.",
//     "help:help you understand all the commands.\n",
   
//   );
// }

// /**
//  * Exits the application
//  *
//  * @returns {void}
//  */


// function quit() {
//   console.log("Quitting now, goodbye!");
//   process.exit();
// }

// var tasks = [
//   "Task 1: Learn Node basics",
//   "Task 2: Edit node.js task",
//   "Task 3: Create Help Function",
//   "Task 4: How to check and uncheck",
// ];
// function add(item, tasks) {
//   var itemN = item.substr(3, item.length);
//   //console.log("\nitemN: "+itemN);
//   tasks.push(itemN.trim());
//   console.log("\n----Task created successfully----\n'write list to list all your tasks' \n")
// }
// function edit(item, tasks) {
//   var arr = item.split(" ");
//   if (arr[0] === 'edit' && arr[1] < tasks.length) {
//     var task = tasks.splice(arr[1] - 1, 1, arr[2]);
//     console.log("----the task number " + arr[1] + " has changed, check you list----");
//   } else {
//     task = tasks.splice(tasks.length - 1, 1, arr[1]);
//     console.log("----the last task has changed, check you list----");
//   }

// }
// // /**
// //  * Exits the application
// //  *
// //  * @returns {void}
// //  */
// // function remove(item, tasks) {
// //   var arr = item.split(" ");
// //   if (item === "remove\n") {
// //     var task = tasks.pop();
// //     console.log("----" + task + " removed, check your list----\n");
// //   } else if (arr[1] > tasks.length) {
// //     console.log("You enter a wrong number, your list has only " + tasks.length + " tasks");
// //     error();
// //   } else {
// //     task = tasks.splice(arr[1] - 1, 1);
// //     console.log("----item " + arr[1] + " removed, check your list---\n");
// //   }
// // }
// // /**
// //  * Exits the application
// //  *
// //  * @returns {void}
// //  */
// function check (item,tasks){
//   //console.log(tasks[1]+"[✓]");
// var arr=item.split(" ");
// if ( arr[1]<tasks.length){
//   var reserve=tasks[arr[1]-1];
//   var task=tasks.splice(arr[1]-1,1,reserve+"[✓]");
//  console.log("----some tasks are done, please check your list----");
// }else{
//   console.log(tasks[arr[1]]);
// }
// }
// function uncheck(item, tasks) {
//   var arr = item.split(" ");
//   if (arr[1] < tasks.length) {
//     var reserve = tasks[arr[1] - 1];
//     var task = tasks.splice(arr[1] - 1, 1, reserve.replace("[✓]", ""));
//     console.log("----task"+task+" unmarked----");
//   } else {
//     console.log("----invalid task number----");
//   }
// }


// function error() {
//   console.log("\n----ERROR TRY AGAIN----\n");
// }
var fs = require ('fs');

try{
  if (fs.existsSync(process.argv[2])){
    var data = fs.readFileSync(process.argv[2]);
  }else{
    var data = fs.readFileSync('database.json');
  }
  var tasks = JSON.parse(data);
}
catch(err){
  console.error(err);
}

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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
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
   text = text.replace('\n','').trim();
     var text0 = text.substring(0,text.indexOf(' '))
     var text1 = text.substring(text.indexOf(' ')+1)
    if ( text0 === 'quit' || text0 === 'exit' || text === 'quit' || text ==='exit') {
       quit();
    }

    else if(text0 === 'hello' || text === 'hello'){
      hello(text0, text1);
    }
  
    else if (text0 === 'help' || text === 'help'){
      help();
    }
    else if(text0 === 'list' || text === 'list'){
      list();
    }
    else if(text0 === 'add' || text === 'add'){
      add(text,text1);
    }
    else if(text0 === 'remove' || text === 'remove'){
      remove(text, text1);
    }
    else if(text0 === 'edit' || text === 'edit'){
      edit(text, text1);
    }
    else if(text0 === 'check' || text === 'check'){
      check(text, text1);
    }
    else if(text0 === 'uncheck' || text === 'uncheck'){
      uncheck(text, text1);
    }
    
   else{
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * @param {string } x hello
 * @param {string } y the name beside hello
 * @returns {void}
 */
 function hello(x,y){
  console.log(x + ' ' + y +'!');
}

/**
 * add new tasks
 * @param  {string} tsk the new task
 * @returns {void}
 */
 function add(text, tsk){
  if (text === 'add'){
    console.log("Error: You didn't enter the task")
  }
  else tasks.push({task:tsk, done:false});
 }

 /**
 * removes the last task
 *
 * @returns {void}
 */

function remove(task, number){
  if (task === 'remove'){
   tasks.splice(-1);
}
  else{

  if (parseInt(number)<= tasks.length+1){
   tasks.splice(parseInt(number)-1, 1);}
  else console.log('Error:the number entered does not exist')
  
}
}

/**
 * edit a task
 * @param  {string} task the new task
 * @returns {void}
 */
 function edit(text, tsk){
  var number = tsk.substring(0,tsk.indexOf(' '))
  number = parseInt(number)
  var newTask = tsk.substring(tsk.indexOf(' ')+1)

  if (text === 'edit'){
    console.log("Error: You didn't enter the task")
  }
  else if (isNaN(number)){
    tasks.splice(-1,1,{task: tsk, done:false})
  }
  else{
    tasks.splice(number-1,1,{task: newTask, done:false})
  }
 }

 /**
 * check tasks
 * @param  {string} number the new task
 * @returns {void}
 */
function check(text, number){
  if (text === 'check'){
    console.log("Error: You didn't enter the number of task")
  }
  else {
    if (parseInt(number)<= tasks.length){
      tasks[number-1].done = true;
    }else console.log('Error: the number entered does not exist')
  }
 }
 

/**
 * uncheck tasks
 * @param  {string} number the new task
 * @returns {void}
 */
function uncheck(text, number){
  if (text === 'uncheck'){
    console.log("Error: You didn't enter the number of task")
  }
  if (parseInt(number)<= tasks.length){
    tasks[number-1].done = false;
  }else console.log('Error: the number entered does not exist')
  }
 


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){

  var data= JSON.stringify(tasks, null, 2)
  if (fs.existsSync(process.argv[2])){
    fs.writeFileSync(process.argv[2],data, 'utf8');

  }else fs.writeFileSync('database.json',data, 'utf8');
  console.log('Quitting now, goodbye!')
  process.exit();
}
/** 
 * @returns {void}
*/
 function help(){
   console.log('     --hello                Says hello!\n')
   console.log('     --hello <name>         Says hello + name!\n')
   console.log('     --help                 Lists all the possible commands\n')
   console.log('     --list                 Lists all tasks\n')
   console.log('     --add <task>           Adds a task to the list of tasks\n')
   console.log('     --remove               removes the last task\n')
   console.log('     --remove <task number>             removes the task of this number\n')
   console.log('     --edit <new task>                  Changes the last task to "new task"\n')
   console.log('     --edit <task number> <new task>    Changes this task to "new task"\n')
   console.log('     --check <task number>              Marks this task as done\n')
   console.log('     --uncheck <task number>            Marks this task as undone\n')
   console.log('     --quit/exit                        Exits the application\n')
  }
  
 
/**
 * Lists all tasks
 *
 * @returns {void}
 */
  function list(){

    tasks.forEach(function callback(item, index) {
     
    if (item.done == true){
      console.log(index+1 + ' - [✓] ' + item.task);
    }else{ 
    console.log(index+1 + ' - [ ] ' + item.task);
      }
   });
}
// The following line starts the application
startApp("Mahdi Halloum")
