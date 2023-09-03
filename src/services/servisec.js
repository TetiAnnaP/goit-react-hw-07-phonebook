import axios from 'axios';

const BASE_URL = 'https://64f3a2bfedfa0459f6c6b959.mockapi.io/';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  // console.log(data);
  return data;
};

export const addContacts = async newContact => {
  const { data } = await axios.post(`${BASE_URL}/contacts/`, newContact);
  // console.log(data);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  // console.log(data);
  return data;
};
