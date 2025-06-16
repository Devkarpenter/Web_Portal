import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'employee', 'client'], default: 'client' },
  image: String,
  address: String,
  phone: String,
});

export default mongoose.model('User', userSchema);