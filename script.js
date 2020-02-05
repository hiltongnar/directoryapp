// directory


/*

To Do:
---create an array that stores all the user objects

---create a function if someone clicks the submit button
  pull all of the user inputs, store as an object - Search Jquery get input values
  pushes that user object to the master array

---create a function that clears all the inputs

create a function that deletes the cards when a user clicks the delete button

create function that renders all cards to page
  ---delete all current cards
  then render everything that is currently in the master array

  TO DO:
  Look at the CDN for jquery
  Work on getting the button rigged up
  Work on pulling the user input
*/
let userArray = [];

$('#mySubmit').click(function(){
  let first = $("#firstName").val();
  console.log(first)
  let last = $("#lastName").val();
  console.log(last)
  let email = $("#eMail").val();
  console.log(email)
  let phone = $("#phoneNumber").val();
  console.log(phone)
  let tempObj = {};

  tempObj.first = first;
  tempObj.last = last;
  tempObj.email = email;
  tempObj.phone = phone;

//if statements to take only acceptable formats, email phone etc.

  userArray.push(tempObj)

  $("#firstName").val("");
  $("#lastName").val("");
  $("#eMail").val("");
  $("#phoneNumber").val("");

  cardRender();
});

$('#myClear').click(function(){
  let first = $("#firstName").val("");
  let last = $("#lastName").val("");
  let email = $("#eMail").val("");
  let phone = $("#phoneNumber").val("");

});


// splice out userArray
//call card render function

function cardDelete(index){

userArray.splice(index,1);

cardRender();


};

function cardRender(){
  $('.results').empty()

  // TO DO - GO THROUGH AND MAKE EVERYTHING DYNAMIC
  for (let index = 0; index < userArray.length; index++) {
    let str = `
                <div class="card">
                  <h2>Member</h2>
                  <p id="cardName" style="font-size: 1.5em;">
                    Name: ` + userArray[index].first + ` ` + userArray[index].last +`
                  </p>
                  <p id="cardEmail" style="font-size: 1.5em;">
                    Email: ` + userArray[index].email + `
                  </p>
                  <p id="cardPhone" style="font-size: 1.5em;">
                    Phone Number: ` + userArray[index].phone +`
                  </p>
                  <p>
                    <button type="button" onClick="cardDelete(${index})"
                     id="`+ index +`">Delete</button>
                  </p>

                 </div>
              `;

    $('.results').append(str);
  }
};
// make delete click event
// console.log (e)
// find the id in dev tools
// splice out that id number from userArray
