import mongoose from 'mongoose';

const bateauSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    capacity:{
        type: Number,
        required: true
    },
    reservations: [
      {
        day: {
          type: String,
        },
        reservations: {
          type: Number,
          default: 0, // Initialize with 0 reservations
        },
      },
    ],
  },
  { timestamps: true }
);

const Bateau = mongoose.model('Bateau', bateauSchema);

export default Bateau;
