const net = require("net");
// establishes a connection with the game server
const connect =  () => {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  conn.on('connect', () => {
    conn.write('Name: CYS');
    // conn.write("Move: up");
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  

  return conn;
};

module.exports = connect