const postsService = require("../services/posts.service");

exports.addPost = (req, res, next) => {
  const data = {
    description: req.body.description,
    imagePath: req.body.imagePath,
    addedByUserId: req.body.addedByUserId,
  };

  postsService.addPost(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAllPosts = (req, res, next) => {
  const data = {};

  postsService.getAllPosts(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.addPostComment = (req, res, next) => {
  const data = {
    postId: req.body.postId,
    comment: req.body.comment,
    addedByUserId: req.body.addedByUserId,
  };
  postsService.addPostComment(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
exports.getPostAllComments = (req, res, next) => {
  const data = {
    postId: req.query.postId,
  };
  postsService.getPostAllComments(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
exports.likePost = (req, res, next) => {
  const data = {
    postId: req.body.postId,
  };
  postsService.likePost(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.dislikePost = (req, res, next) => {
  const data = {
    postId: req.body.postId,
  };
  postsService.dislikePost(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deletePost = (req, res, next) => {
  const data = {
    postId: req.query.postId,
  };
  postsService.deletePost(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
