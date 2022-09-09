module.exports.authGate = (req, res, next) => {
  console.log("hello auth gate !");
  next();
};
