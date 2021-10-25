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

