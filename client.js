const net = require("net");
const {
  IP,
  PORT
} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to the snake server!");
    conn.write('Name: Jsu');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};


module.exports = {
  connect
};