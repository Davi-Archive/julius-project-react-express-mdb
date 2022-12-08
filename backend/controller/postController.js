const model = require("../models");

const postDB = model.post;

// @desc Get post Info
// @route GET /api/post
// @access Private
const getPost = async (req, res) => {
  const post = await postDB.find();
  res.status(200).json(post);
};

// @desc Get ONE post
// @route GET /api/post/:id
// @access Public
const getOnePost = async (req, res) => {
  const { id } = req.params;
  const data = await postDB.findById(id);
  res.status(200).json(data);
};

// @desc Post post Info
// @route POST /api/post
// @access Private
const postPost = async (req, res) => {
  const { title, description, imgUrl } = req.body;
  if (!title || !description || !imgUrl) {
    res.status(400).json({
      error: "wrong requisiton format",
      correct: {
        title: "String",
        description: "String",
        imgUrl: "String",
      },
    });
  }

  const post = await postDB.create({
    title,
    description,
    imgUrl,
  });

  res.status(200).json({ msg: "Successfully Created", post });
};

// @desc Put post Info
// @route PUT /api/post
// @access Private

const putPost = async (req, res) => {
  const find = await postDB.findById(req.params.id);
  if (!find) return res.status(404).json({ message: "ID not found" });
  if (!req.params.id) return res.status(400).json({ message: "specify the ID" });

  const updatepost = await postDB.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json(updatepost);
};

// @desc Delete post Info
// @route DELETE /api/post
// @access Private
const deletePost = async (req, res) => {
  const findpost = await postDB.findById(req.params.id);
  if (!findpost) {
    return res.status(400).json({ message: "Not found" });
  }
  const deleted = await postDB.findByIdAndDelete(req.params.id);
  return res.status(200).json({ message: "Successfully deleted", deleted });
};

module.exports = {
  getPost, getOnePost, postPost, putPost, deletePost,
};
