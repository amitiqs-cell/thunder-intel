export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        status: "error",
        message: "Mobile number required"
      });
    }

    const response = await fetch(
      `https://idinfonumber-hde6.onrender.com/api/search?q=${q}&key=pass3LIKA`
    );

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return res.status(404).json({
        status: "not_found",
        message: "No data found"
      });
    }

    const formatted = data.results.map(item => ({
      "👤 Name": item.name?.trim() || "N/A",
      "👨 Father Name": item.father_name?.trim() || "N/A",
      "📱 Mobile": item.mobile?.trim(),
      "🆔 Aadhaar": item.aadhar
        ? item.aadhar.replace(/^(\d{4})\d{4}(\d{4})$/, "$1-XXXX-$2")
        : "N/A",
      "🏠 Address": item.address?.replace(/!/g, ","),
      "📡 Circle": item.circle
    }));

    res.status(200).json({
      status: "success",
      total: formatted.length,
      data: formatted
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server error"
    });
  }
}
