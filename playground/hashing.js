const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

///////bcryptjs example

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPwd = '$2a$10$EqwMeqgzrXG6pAXTnUnj3OQvD0eRBzPn6l5mqEn/rBWe8uwtbh03K';

//takes plain val and hash to see if they match
bcrypt.compare(password, hashedPwd, (err, res) => {
  console.log(res);
});

////////JWT example

// var token = jwt.sign(data, '123abc'); //param1 == data, param2 == secret for hash
// console.log('Token ', token);
// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded ', decoded)

///////SHA256 example

// var message = 'I am user 31';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString();
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data WAS changed');
// }
