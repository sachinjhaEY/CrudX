const catchAsync = require("./../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      res: "Signed up"
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      res: "Logged in"
    },
  });
});
