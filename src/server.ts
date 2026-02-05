// // debugging sementara
// import dotenv from 'dotenv';
// dotenv.config();

// console.log('--- DEBUGGING ENV ---');
// console.log('MONGO_URI terdeteksi:', process.env.MONGO_URI ? 'YA (String ditemukan)' : 'TIDAK (Undefined)');
// console.log('---------------------');
// // end of debugging sementara

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || '5001';
const MONGO_URI = process.env.MONGO_URI || 'no mongo uri';

mongoose
  // .connect(MONGO_URI, {
  //   family: 4, // Force IPv4 (avoids IPv6 handshake issues)
  //   authSource: 'admin', // Explicitly tell it where to look for the user
  //   retryWrites: true,
  // })
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
