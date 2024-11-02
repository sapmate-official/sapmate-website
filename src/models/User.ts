// models/User.ts
import  { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: Number, required: true },
    message:{ type: String, required: false },
});

const User = models.User || model("User", userSchema);

export default User;
