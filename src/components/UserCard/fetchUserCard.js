import axios from 'axios';

axios.defaults.baseURL = 'https://6464f2ad228bd07b353dda84.mockapi.io/users/';

export const getUsersList = async () => {
    const response = await axios.get(`/users`); 
    return response;
};

export const getUserCard = async () => {
    const response = await axios.get(`/users/:id`); 
    return response;
};

export const deleteUserCard = async () => {
    const response = await axios.delete('/users/:id');
    return response;
}

export const putUserCard = async (users) => {
    const response = await axios.put(`/users/${users.id}`, users);
    return response.data;
}

export const postUserCard = async () => {
    const response = await axios.post('/users');
    return response;
}