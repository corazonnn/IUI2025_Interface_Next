const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/combine', async (req, res) => {
  const { ideaA, ideaB } = req.body;

  // OpenAI APIへのリクエスト（簡易的な例）
  const combinedIdea = `${ideaA} と ${ideaB} を組み合わせた新しいアイデアです!`;

  res.json({ combinedIdea });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
