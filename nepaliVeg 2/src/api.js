import axios from 'axios';

var url = 'http://realtime-api.opendatanepal.com/kalimati-price/api/archive';

export default axios.create({
  baseURL: url,
});
