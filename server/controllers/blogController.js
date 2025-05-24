import Blog from '../models/Blog.js';
import fs from 'fs';
import path from 'path';

export const getPosts = async (req, res) => {
  const posts = await Blog.find().sort({ date: -1 });
  res.json(posts);
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file?.filename;

  if (!title || !content || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const post = new Blog({ title, content, image });
  await post.save();
  res.status(201).json(post);
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const image = req.file?.filename;

  const post = await Blog.findById(id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  post.title = title;
  post.content = content;
  if (image) post.image = image;

  await post.save();
  res.json(post);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Blog.findById(id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  const imagePath = path.join('uploads', post.image);
  fs.unlink(imagePath, () => {});
  await Blog.deleteOne({ _id: id });
  res.json({ message: 'Deleted' });
};
