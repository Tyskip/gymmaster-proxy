export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GYMMASTER_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: "Missing API Key" });
    }

    const response = await fetch("https://gymmaster-proxy-kwsn-a5c1vlz2s-tyskips-projects.vercel.app/api/memberships", {
      headers: {
        "X-API-Key": API_KEY
      }
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({ error: "GymMaster API error", details: text });
    }

    const data = JSON.parse(text);
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
