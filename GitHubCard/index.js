import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [
  "chrispy-dev",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then((userInfo) => cardCreator(userInfo.data))
    .catch(err => console.log(err));
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardCreator = (info) => {
  const container = document.querySelector('.cards');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add("card");

  const profileImg = document.createElement('img');
  profileImg.src = info.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add("card-info");

  const name = document.createElement('h3');
  name.classList.add("name");
  name.textContent = info.name || "Anonymous";

  const username = document.createElement('p');
  username.classList.add("username");
  username.textContent = info.login;

  const location = document.createElement('p');
  location.textContent = `Location: ${info.location || "N/A"}`;

  const profile = document.createElement('p');
  profile.textContent = "Profile: ";

  const profileAddress = document.createElement('a');
  profileAddress.href = info.html_url;
  profileAddress.textContent = info.html_url;

  const followerCount = document.createElement('p');
  followerCount.textContent = `Followers: ${info.followers}`;

  const followingCount = document.createElement('p');
  followingCount.textContent = `Following: ${info.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${info.bio || "Hasn't written a bio yet!"}`;

  cardContainer.appendChild(profileImg);
  cardContainer.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
      profile.appendChild(profileAddress);
    cardInfo.appendChild(followerCount);
    cardInfo.appendChild(followingCount);
    cardInfo.appendChild(bio);

  container.appendChild(cardContainer);
};

// cardCreator(chris);
// cardCreator(tetondan);
// cardCreator(dustinmysers);
// cardCreator(justsml);
// cardCreator(luishrd);
// cardCreator(bigknell);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
