import connection from '../db/mongoose.js';

const UserSchema = new connection.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0,
    }
});

const User = connection.model('User', UserSchema);

export default User; 