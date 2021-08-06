const http = require("http");

const server = http.createServer((request, response) => {
  console.log(`A request has been made: ${request.url}`);
  const { url } = request;
  //   const url = request.url;
  if (url === "/") {
    response.write("Welcome to Homepage");
    response.end();
  } else if (url === "/about") {
    // response.write("This is my webpage");
    response.write(
      `<img src="https://blog.cloudflare.com/content/images/image00.jpg" />`
    );
    response.end();
  } else {
    response.write(
      `<p style="color: red">You requested ${url} but we don't have anything there</p>`
    );
    response.end();
  }
});

server.listen(3000);
