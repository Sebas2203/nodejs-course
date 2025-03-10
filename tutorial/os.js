const os = require("os");

console.log(os.userInfo()); // información del usuario
console.log(os.uptime()); // tiempo de encendido
console.log(os.platform()); // sistema operativo
console.log(os.totalmem()); // memoria total ram
console.log(os.freemem()); // memoria libre ram

console.table({
  os: os.platform(),
  version: os.version(),
  totalMemory: os.totalmem(),
});
