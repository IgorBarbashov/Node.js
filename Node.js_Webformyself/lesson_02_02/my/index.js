const userObj = require('./user');

console.log('Hello', __dirname);
console.log('Hello', __filename);

console.log('Hello', userObj.user);
userObj.sayHello();