const axios = require('axios');

app.get('/call-aks', async (req, res) => {
  try {
    const response = await axios.get('http://<aks-service-ip>');
    res.send(response.data);
  } catch (error) {
    res.send(error.message);
  }
});
