const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');


 exports.login = catchAsync(async (req, res) => {

  const usr = req.body.usr;
  const psw = req.body.psw;
  let val;

  //TODO collegarlo al DB
  if("password" == psw && "BigZ" == usr)
  {
    val="ok";
    res.status(200).json({
      status: "success",
      data: val
    });
  }
  else
  {
    val="no";
    res.status(200).json({
      status: "nokie",
      data: val
    });
  }
});