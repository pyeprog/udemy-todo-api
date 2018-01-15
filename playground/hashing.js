const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
});

var hashedPassword = "$2a$10$3awASIgWSXISEwzNG5w14eSAnZGZBHWK1HKXH4YDKqP6G5FLRPyce";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

// var data = {
//   id: 10
// };
// 
// var token = jwt.sign(data, '123abd');
// console.log(token);
// var decoded = jwt.verify(token, '123abd');
// console.log(decoded);
// 
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
// 
// console.log(`message: ${message}`);
// console.log(`message: ${hash}`);
// 
// var data = {
//   id: 4
// };
// 
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'something').toString()
// }
// 
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// 
// var resultHash = SHA256(JSON.stringify(token.data) + 'something').toString();
// 
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed!');
// }
