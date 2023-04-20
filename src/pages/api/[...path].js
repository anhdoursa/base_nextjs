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
  return new Promise((resolve) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("access_token");
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    // don't send cookies to the server
    req.headers.cookie = "";
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });
}
