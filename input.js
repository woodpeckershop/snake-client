const { keyMap } = require("./constants");

// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) => {
    // your code here

    // const input = {
    //   w: 'Move: up',
    //   s: 'Move: down',
    //   a: 'Move: left',
    //   d: 'Move: right'
    // }
    conn.write(keyMap[key])

    // if (key === "w") {
    //   conn.write("Move: up");
    // } else if (key === "s") {
    //   conn.write("Move: down");
    // } else if (key === "a") {
    //   conn.write("Move: left");
    // } else if (key === "d") {
    //   conn.write("Move: right");
    // } else if (key === 'q') {
    //   conn.write("Say: Hello all!");
    // } else 
    if (key === "\u0003") {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

// Stores the active TCP connection object.

module.exports = setupInput;
