import Bateau from "../models/bateau.model.js";

export const getHotel = async (req, res, next) => {
  try {
      const hotel = await Bateau.findById(req.params.id)
      res.status(200).json(hotel)
  } catch (error) {
      next(error)
      
  }
}

export const getBateau = async (req, res, next) => {
    try {
        const bateau = await Bateau.findById(req.params.id)
        res.status(200).json(bateau)
    } catch (error) {
        next(error)
    }
}

export const getAvailableBateau = async (req, res, next) => {
  const date = req.query.day;
  const numbers = req.query.reservations;
  console.log(date, numbers);
  try {
      const bateau = await Bateau.aggregate([
        {
          $match: {
            'reservations.day': date,
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            capacity: 1,
            reservations: {
              $filter: {
                input: '$reservations',
                as: 'reservation',
                cond: {
                  $eq: ['$$reservation.day', date],
                },
              },
            },
          },
        },
        {
          $addFields: {
            remainingCapacity: {
              $subtract: ['$capacity', { $sum: '$reservations.reservations' }],
            },
          },
        },
        {
          $match: {
            remainingCapacity: { $lt: numbers },
          },
        },
      ]);
      console.log(bateau);
      //return(bateau)
      res.status(200).json('ok')
  } catch (error) {
      next(error)
  }
}

export const createBateau = async (req, res, next) => {
    const newBateau = new Bateau(req.body)
    try {
         const savedBateau = await newBateau.save()
         res.status(200).json(savedBateau)
    } catch (error) {
        next(error)
    }
}

export const updateBateau = async (req, res, next) => {
    const { day, reservations } = req.body;
    console.log(day, reservations);
    try {
        const bateau = await Bateau.findById(req.params.id);
        if (!bateau) {
          return res.status(404).json({ message: 'Bateau not found' });
        }
        
        // Check if the reservation day exists in the bateau's reservations array
        const bateauReservation = bateau.reservations.find(r => r.day===day);
        
        if (bateauReservation) {
          // Check if the bateau's capacity for that day is already reached
          if (bateauReservation.reservations >= bateau.capacity) {
            return res.status(400).json({ message: 'bateau capacity for this day is already full' });
          }
          
          // Add the reservation for the specified day
          bateauReservation.reservations += reservations;
        } else {
          // If the day doesn't exist in the reservations array, add it
          bateau.reservations.push({ day: day, reservations: reservations });
        }
    
        await bateau.save();

        const data = bateau.reservations.find(r => r.day===day);
        res.json(data);
      } catch (error) {
        next(error);
      }
}
