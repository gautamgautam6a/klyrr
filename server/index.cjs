const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_FILE = path.join(__dirname, 'funnel-submissions.json');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/funnel-form', (req, res) => {
  const submission = {
    ...req.body,
    submittedAt: new Date().toISOString(),
  };
  let submissions = [];
  if (fs.existsSync(DATA_FILE)) {
    try {
      submissions = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (e) {
      submissions = [];
    }
  }
  submissions.push(submission);
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to save submission.' });
  }
});

app.listen(PORT, () => {
  console.log(`Funnel form backend running on port ${PORT}`);
}); 