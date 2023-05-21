const http = require('http');

const server = http.createServer((req, res) => {
  const redirectUrl = 'https://persist.rocks/posventa';
  const queryParams = req.url.slice(1);
  console.log(`** queryParams: ${queryParams}`);
  const newUrl = `${redirectUrl}${queryParams}`;
  console.log(`** newUrl: ${newUrl}`);
  res.writeHead(302, { 'Location': newUrl });
  res.end();
});

const port = 4250;  // Port number to listen on
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
