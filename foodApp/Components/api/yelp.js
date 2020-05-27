const axios = require('axios');

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer xv8YZp0XVFGmT2EhUDY2f0y0fgpDO73IcQ9sj3i-Cee9geaLmBb-byl1WyaToQsCNq56E8cUz77kUemrFmdCvRhN8GCflJfuULwV44dTe48KM8CD7MQtqiY9ZCjOXnYx',
  },
});