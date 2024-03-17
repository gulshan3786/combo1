// server.js

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
// Define endpoint for fetching cities based on state
app.get('/cities/:state', (req, res) => {
  const state = req.params.state;
  let cities = [];
  switch (state) {
    case 'AP':
      cities = ['Visakhapatnam', 'Vijayawada', 'Guntur'];
      break;
    case 'KA':
      cities = ['Bangalore', 'Mysore', 'Hubli'];
      break;
    case 'MH':
      cities = ['Mumbai', 'Pune', 'Nagpur'];
      break;
    default:
      cities = [];
  }
  res.json(cities);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
