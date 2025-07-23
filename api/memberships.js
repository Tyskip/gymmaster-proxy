export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://humbabeathletics.gymmasteronline.com/portal/api/v1/memberships",
      {
        headers: {
          Authorization: "Bearer 9c79aca29f8987f1e0472092f8d9e9c2",
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "GymMaster API error" });
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error", detail: err.message });
  }
}
