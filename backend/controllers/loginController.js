const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');
const loginsModel = require('../models/loginsModel');


 exports.login = catchAsync(async (req, res) => {

  const usr = req.body.usr;
  const psw = req.body.psw;
  console.log(usr+" --- "+psw)
  const login = await loginsModel.find({usr});
  const val="ok";
  if("password" == psw)
  {
    res.status(200).json({
      status: "success"
    });
  }

  res.status(401).json({
    status: "nokie"
  });
});