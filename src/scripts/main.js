import dataFunctions from "./data.js"
import factoryFunctions from "./factory.js"
import renderFunctions from "./dom.js"
import data from "./data.js";



const nameInput = document.querySelector("#nameInput")
const phoneNumberInput = document.querySelector("#phoneNumberInput")
const addressInput = document.querySelector("#addressInput")
const saveButton = document.querySelector("#saveButton")



dataFunctions.getContactsData()
    .then(contacts => {
        renderFunctions.renderContacts(contacts)
    })



saveButton.addEventListener("click", (event) => {
    const hiddenContactId = document.querySelector("#contactId")
    const newContactObj = factoryFunctions.createNewContactObject(nameInput.value, phoneNumberInput.value, addressInput.value)
    if (hiddenContactId.value !== "") {
        dataFunctions.editContact(newContactObj, hiddenContactId.value)
            .then(() => {
                dataFunctions.getContactsData()
                    .then(contacts => renderFunctions.renderContacts(contacts))
            })
    } else {
        dataFunctions.saveNewContact(newContactObj)
            .then(() => {
                dataFunctions.getContactsData()
                    .then(contacts => renderFunctions.renderContacts(contacts))
            })
    }
    nameInput.value = ""
    phoneNumberInput.value = ""
    addressInput.value = ""
})


renderFunctions.contactListContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteContact--")) {
        const contactToDelete = event.target.id.split("--")[1]
        console.log(contactToDelete)
        dataFunctions.deleteContact(contactToDelete)
            .then(dataFunctions.getContactsData)
            .then(contacts => {
                renderFunctions.contactListContainer.innerHTML = ""
                renderFunctions.renderContacts(contacts)
            })
    }
})

renderFunctions.contactListContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("editContact--")) {
        const contactToEdit = event.target.id.split("--")[1]
        dataFunctions.updateFormFields(contactToEdit)
    }
})