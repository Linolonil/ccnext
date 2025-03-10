import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  authorPic?: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  authorPic: { type: String },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
