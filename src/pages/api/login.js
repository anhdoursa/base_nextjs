import Cookies from "cookies";
import httpProxy from "http-proxy";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  return new Promise((resolve) => {
    // don't send cookies to the server
    req.headers.cookie = "";
    const handleLoginResponse = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        const isSuccess =
          proxyRes.statusCode &&
          proxyRes.statusCode >= 200 &&
          proxyRes.statusCode < 300;
        if (!isSuccess) {
          resolve(true);
          return res.status(proxyRes.statusCode).json({
            error: body,
          });
        }
        try {
          const { accessToken, expiredAt } = JSON.parse(body);
          // convert token to cookie
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          cookies.set("access_token", accessToken, {
            httpOnly: true,
            expires: new Date(expiredAt),
            sameSite: "lax",
          });
          res.status(200).json({ message: "Login successful" });

          resolve(true);
        } catch (error) {
          res.status(500).json({ error });
        }
      });
    };
    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
