import httpProxy from "http-proxy";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  // don't send cookies to the server
  req.headers.cookie = "";
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });

  //   res.status(200).json({ name: "John Doesss" });
}
