import mongoose from 'mongoose';
const {DATABASE} = process.env

async function main() {
    if (!DATABASE) {
        console.error('Error: MONGO_URI is not defined in the environment variables.');
        process.exit(1); 
    }
    await mongoose.connect(DATABASE);
}
main()
.then(() => console.log('Connected to db' ))
.catch(err => console.log(err));
