const express = require('express');
const { GoogleAuth } = require('google-auth-library');

const app = express();
const port = 4000;

app.get('/get-gcloudToken', async (req, res) => {
  const authorization = new GoogleAuth();
  const client = await authorization.getClient();

  try {
    const gcloudToken = await client.getAccessToken();
    res.json({ gcloudToken });
  } catch (error) {
    console.error(`Error getting gcloudToken, please make sure gcloud SDK is installed and validate login by running this command in terminal/cmd 'gcloud auth application-default login': ${error.message}`);
    res.status(500).json({ error: `failed to fetch gcloudToken, please make sure gcloud SDK is installed and validate login by running this command in terminal/cmd 'gcloud auth application-default login'` });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
