import fetch from "node-fetch";

const response = await fetch(
  "http://ec2-3-95-199-158.compute-1.amazonaws.com/health.html"
);

if (response.status === 200) {
  console.log("Server is up and running");
}
