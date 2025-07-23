export default async function handler(req, res) {
  const API_KEY = process.env.GYMMASTER_API_KEY;

  const response = await fetch("https://humbabeathletics.gymmasteronline.com/portal/api/v1/memberships", {
    headers: {
      "Authorization": `key ${API_KEY}`,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  res.status(response.status).json(data);
}
