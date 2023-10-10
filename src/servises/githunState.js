import axios from 'axios';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SECRET;
const URL = 'https://api.github.com/search/users';

export async function fetchResponce(searchQuery) {
  try {
    const response = await axios.get(URL, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        q: searchQuery,
      },
    });
    const { items } = response.data;
    return { items: items };
  } catch (err) {
    console.log('FETCH ERROR: ' + err);
  }
}
