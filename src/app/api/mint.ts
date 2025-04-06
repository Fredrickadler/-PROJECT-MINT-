import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({
      "fc:frame": {
        "version": "vNext",
        "image": "https://i.imgur.com/5lAUjyc.webp",
        "buttons": [
          {
            "label": "Confirm Mint",
            "action": "post",
            "target": "https://cosmic-fragment-mini.your-username.replit.app/"
          }
        ],
        "post_url": "https://cosmic-fragment-mini.your-username.replit.app/"
      },
      "message": "Mint request processed!"
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
