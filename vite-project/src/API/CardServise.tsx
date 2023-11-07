import axios from 'axios';

export default class CardService {
  static async getAll(page: number, limit: number) {
    const response = await axios.get(
      `https://api.openbrewerydb.org/v1/breweries?by_state=new_york&by_type=brewpub&page=${page}&per_page=${limit}`
    );
    return response;
  }
  static async getByName(name: string) {
    const response = await axios.get(
      `https://api.openbrewerydb.org/v1/breweries/${name}`
    );
    return response.data;
  }
}
