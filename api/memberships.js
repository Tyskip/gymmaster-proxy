export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GYMMASTER_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: "Missing GymMaster API Key" });
    }

    const response = await fetch("https://humbabeathletics.gymmasteronline.com/portal/api/v1/memberships", {
      headers: {
        "Authorization": `key ${API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    res.status(response.status).json(data);

  } catch (error) {
    console.error("GymMaster API Error:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
