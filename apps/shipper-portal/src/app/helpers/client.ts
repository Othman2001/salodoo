import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer fbed48ca9c1db24a16e4542d4b18e672b93d0aa7412672d363c228abdf465374f45f26f3e209a153fdb7fe5be77fd82253ea322d1ed76d0ee5f616c3d66419e05f4c3d0b8bcfdf716dc74b83d08531b23d77aac215d89dd474901fa3e423ee4d3a59cf7e1fd3990a5cd782a13b3b6be546d5dafd839a7ac45b09ba115ce6f0f2`
  },
  
  timeout: 1000 * 60,
});

export default client;
