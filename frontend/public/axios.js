import axios from 'axios';

const fetchVaccinationDrives = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/vaccination');
    console.log(response.data);
  } catch (err) {
    console.error("Error fetching vaccination drives:", err);
  }
};
