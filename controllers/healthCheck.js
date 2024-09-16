const catchAsync = require("../utils/catchAsync");

exports.getHealthCheck = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      res: "OK"
    },
  });
});
