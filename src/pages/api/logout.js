import Cookies from "cookies";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const cookies = new Cookies(req, res);
  cookies.set("access_token");

  res.status(200).json({ message: "logout successfully" });
}
