document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  let socket = io();
  //   const form = document.querySelector("#form");
  //   const message = document.querySelector("#message");
  //   const messages = document.querySelector("#messages");

  //   form.addEventListener("submit", (e) => {
  //     console.log("e fired", e);
  //     //   console.log('messages.')
  //     e.preventDefault();
  //     socket.emit("chat message", message.value);
  //     message.value = "";
  //     return false;
  //   });
  //   socket.on("chat message", (msg) => {
  //     let listItem = document.createElement("li");
  //     listItem.textContent = msg;
  //     messages.append(listItem);
  //   });
});
