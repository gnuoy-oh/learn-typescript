// api url
var url = "https://jsonplaceholder.typicode.com/users";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

// Javacript: console.log 를 찍기 전까지는 fetchUser의 반환 결과를 알 수 없다.
// Typescript:

/**
 * @typedef {object} address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.cit;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;

      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].addres.gg;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
