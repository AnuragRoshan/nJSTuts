const os=require('os');

//info about current user
const user=os.userInfo();
// console.log(user);

//return system uptime in seconds
const upt=os.uptime();
// console.log(upt);

const cuurentOs ={
 name:os.type(),
release:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem(),
}
console.log(cuurentOs);
