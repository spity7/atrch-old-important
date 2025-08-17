import axios from "axios";

const API_URL = "https://mila-react.onrender.com/api/v1/properties";

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("API Error:", error); // Log the error
    throw error; // Re-throw the error to handle it in the component
  }
};

export const createProperty = async (propertyData) => {
  const response = await axios.post(API_URL, propertyData);
  return response.data;
};

// Additional functions for updating and deleting properties can be added here as needed.
