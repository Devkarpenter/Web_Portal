import User from '../models/User.js';

export const getProfile = async (req, res) => {
  res.json(req.user);
};

export const updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) updates.image = req.file.path;
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
};