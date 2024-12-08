import axios from "../components/api";

const REST_API_BASE_URl = 'https://foodwastemanagementsystem66.up.railway.app/donations';

export const listDonations=()=>axios.get(REST_API_BASE_URl);

// Get donations by donorId
export const listUserDonations = (donorId) => {
  return axios.get(`/donations/donor/${donorId}`);
};

// Delete donation by ID
export const deleteDonation = (id) => {
  return axios.delete(`/donations/${id}`);
};
