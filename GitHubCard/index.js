/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get(' https://api.github.com/users/fishmanjohn')
.then(data =>{
  console.log(data);
  const myInfo = data.data;
  console.log('userInfo: ', myInfo)

//step4 
const masterDiv = document.querySelector('.cards');
const cardInfo = createCard(myInfo)
masterDiv.appendChild(cardInfo);

})
.catch(error =>{
  console.log(error);
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


// axios.get('https://api.github.com/users/fishmanjohn/followers')
// .then(objAry =>{

//   console.log(objAry);
//   const followersArray = objAry.



// console.log(followersArray)
const followersArray =['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

  followersArray.forEach(user =>{
    axios.get(` https://api.github.com/users/${user}`)
    .then(data =>{
      console.log(data);
      const myInfo = data.data;
      console.log('userInfo: ', myInfo)





//step4 
const masterDiv = document.querySelector('.cards');
const cardInfo = createCard(myInfo)
masterDiv.appendChild(cardInfo);

})
})
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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




function createCard (data) {
const cardDiv = document.createElement('div');
      userImg = document.createElement('img');
      cardInfoDiv = document.createElement('div');
      nameHead = document.createElement('h3');
      userNameP = document.createElement('p');
      locationP = document.createElement('p');
      profileP= document.createElement('p');
      linkToPofile = document.createElement('a');
      folowersCount = document.createElement('p');
      folowingCount = document.createElement('p');
      bioTxt = document.createElement('p');

      //append elements
      cardDiv.appendChild(userImg);
        cardDiv.appendChild(cardInfoDiv);
          cardInfoDiv.appendChild(nameHead);
          cardInfoDiv.appendChild(userNameP);
          cardInfoDiv.appendChild(locationP);
          cardInfoDiv.appendChild(profileP);
            profileP.appendChild(linkToPofile);
          cardInfoDiv.appendChild(folowersCount);
          cardInfoDiv.appendChild(folowingCount);
          cardInfoDiv.appendChild(bioTxt);
      //assign classes
      cardDiv.classList.add('card');
      cardInfoDiv.classList.add('card-info');
      nameHead.classList.add('name');
      userNameP.classList.add('username');
      //text content 
      userImg.src = data.avatar_url;
      nameHead.textContent = data.name;
      userNameP.textContent = data.login; 
      locationP.textContent = `Location: ${data.location}`;
      profileP.textContent = 'Profile: ';
      linkToPofile.href = data.html_url;
      linkToPofile.textContent = data.login;
      folowersCount.textContent = `Followers: ${data.followers}`;
      folowingCount.textContent = `Following: ${data.following}`;
      bioTxt.textContent = `Bio: ${data.bio}`







return cardDiv;
};




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
