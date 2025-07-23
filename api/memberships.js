// /api/proxy-memberships.js (Vercel Serverless Function)
export default async function handler(req, res) {
  const response = await fetch('https://humbabeathletics.gymmasteronline.com/portal/api/v1/memberships', {
    headers: {
      'Authorization': '9c79aca29f8987f1e0472092f8d9e9c2'
    }
  });
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');  // allow requests from anywhere
  res.status(200).json(data);
}
