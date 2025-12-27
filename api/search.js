// search.js

module.exports = async (req, res) => {
  const phoneNumber = req.query.q;
  const apiKey = req.query.key;

  if (!phoneNumber || !apiKey || apiKey !== 'pass3LIKA') {
    return res.status(400).json({ error: 'Invalid request or missing key.' });
  }

  // Simulate fetching data (you would replace this with your actual data fetching logic)
  const results = [
    {
      name: "Rahil Begam",
      father_name: "Mauhmmad Karimuddin",
      mobile: phoneNumber,
      aadhar: "476083612998",
      address: "W/O Mauhmmad Karimuddin!house no-238!!  jalalpur raghunathpur Basantpur Saitli  !Ghaziabad!Uttar Pradesh!201206",
      circle: "AIRTEL UPW"
    }
  ];

  // Respond with emoji and data
  return res.status(200).json({
    message: "🔍 Here is the result:",
    results: results
  });
};
