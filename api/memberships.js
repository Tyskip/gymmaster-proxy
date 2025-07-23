export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GYMMASTER_API_KEY;

    if (!API_KEY) {
      console.error("Missing GymMaster API Key in environment variables");
      return res.status(500).json({ error: "Missing GymMaster API Key" });
    }

    const response = await fetch("https://humbabeathletics.gymmasteronline.com/portal/api/v1/memberships", {
      headers: {
        "Authorization": `key ${API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("GymMaster API returned error:", response.status, text);
      return res.status(response.status).json({ error: "GymMaster API error", details: text });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Unhandled error in proxy:", error);
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
