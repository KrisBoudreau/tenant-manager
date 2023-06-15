
import axios from 'axios';

export const getUser = async (email) =>  {
  try {
    const user = await axios.get(`http://localhost:3001/${email}`);
    return user;
    
  } catch (error) {
    console.log(error.message);
  }
};

export default getUser;

