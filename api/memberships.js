// api/memberships.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://humbabeathletics.gymmasteronline.com/portal/api/v1/memberships', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY_HERE'
      }
    });

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow Webflow to call this
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
}
