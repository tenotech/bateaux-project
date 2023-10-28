import axios from 'axios';

export const getAvailableBateau0 = async (formData) => {
  try {
    const response = await axios.get('/api/bateau/available-bateau', {
      params: formData,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching available bateau:', error);
    throw error;
  }
};

export const getBateau = async (id) => {
  try {
    const response = await axios.get(`/api/bateau/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching available bateau:', error);
    throw error;
  }
};

const getAvailableBateau = async (date, numbers) => {
    try {
      const response = await axios.get('/api/available-bateau', {
        params: {
          date,
          numbers,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching available rooms:', error);
      throw error;
    }
  };

export { getAvailableBateau };