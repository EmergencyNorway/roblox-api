let calls = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { type, message, player } = req.body;

    if (!type || !message || !player) {
      return res.status(400).json({ error: "Missing data" });
    }

    const call = {
      id: Date.now().toString(),
      type,
      message,
      player,
      time: Date.now(),
    };

    calls.push(call);

    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(calls);
  }

  if (req.method === "DELETE") {
    calls = [];
    return res.status(200).json({ cleared: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
