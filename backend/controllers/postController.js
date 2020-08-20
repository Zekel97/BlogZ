const catchAsync = require("./../utils/catchAsync");
const AppError = require('./../utils/appError');
const postModel = require('./../models/blogModel');

exports.getAllPosts = catchAsync(async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    status: "success",
    data: {
      posts
    },
  });
});

exports.getPost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const post = await postModel.findById(postId);

  res.status(200).json({
    status: "success",
    data: {
      post
    },
  });
});

 exports.createPost = catchAsync(async (req, res) => {

  const body = req.body.body;
  const title = req.body.title;
  const post = await postModel.create({ title, body });

  res.status(200).json({
    status: "success",
    data: {
      post
    },
  });
});