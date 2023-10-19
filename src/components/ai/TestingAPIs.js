import axios from "axios";

async function sendNewMessage(chatMessages) {
  fetch("https://reqres.in/api/users/13", {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //   name: "New User",
    //   avatar: "https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png",
    //   email: "linkedin@test.com",
    //   first_name: "Testing API",
    //   id: 13,
    //   last_name: "TEST NEW USER",
    // }),
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => console.log(response));
}

export default sendNewMessage;
