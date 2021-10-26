const userForm = document.getElementById("user-form");
const userSubmitButton = document.getElementById("user-form-submit");

userSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = userForm.firstName.value;
    const lastName = userForm.lastName.value;
    const phoneNumber = userForm.phoneNumber.value;
    const emailId = userForm.emailId.value;
    const address = userForm.address.value;
    console.log(firstName,lastName,phoneNumber,emailId,address)
    createUserDetails(firstName, lastName, phoneNumber, emailId, address)
})

const createUserDetails = (firstName, lastName, phoneNumber, emailId, address) => {
    fetch("api url", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          emailId: emailId,
          address: address
        }),
      })
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err);
        });
}

function firstNameValidation(inputText){
  let textVal2 = inputText
  console.log(inputText)
  if(textVal2.value.length >=3){///
      console.log('last name validation success')
  }else {
      alert('make sure the input should be upto 3 characters')
  }
}

function lastNameValidation(inputText){
  let textVal1 = inputText
  if(textVal1.value.length >=3){
      console.log('last name validation success')
  }else {
      alert('make sure the input should be upto 3 characters')
  }
}

function phoneNum(inputNum){
  let phoneNum = /^\d{10}$/;
  if(inputNum.value.match(phoneNum)){
      return true
  } else {
      alert('phone must be 10 digit')
      return false
  }
}

function validateEmail(email) {
  const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(String(email).toLowerCase());
}


