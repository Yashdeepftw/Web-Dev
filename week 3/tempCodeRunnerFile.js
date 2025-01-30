n = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });