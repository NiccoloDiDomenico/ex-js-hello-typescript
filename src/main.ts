let message: string = "Hello, TypeScript!";
console.log(message);

const app = document.getElementById("app");

if (app) {
  app.innerHTML = message;
}
