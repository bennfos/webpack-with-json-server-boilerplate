const getContactsData = () => {
    return fetch("http://localhost:8088/contacts")
        .then(response => response.json())
}


const saveNewContact = (newContactObj) => {
    return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContactObj)
    })
}

const deleteContact = (contactId) => {
    return fetch(`http://localhost:8088/contacts/${contactId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
}

const updateFormFields = (contactId) => {
    const hiddenContactId = document.querySelector("#contactId")
    const nameInput = document.querySelector("#nameInput")
    const phoneNumberInput = document.querySelector("#phoneNumberInput")
    const addressInput = document.querySelector("#addressInput")
    return fetch(`http://localhost:8088/contacts/${contactId}`)
        .then(response => response.json())
        .then(contact => {
            hiddenContactId.value = contact.id
            nameInput.value = contact.name
            phoneNumberInput.value = contact.phoneNumber
            addressInput.value = contact.address
        })
}

const editContact = (updatedObject, contactId) => {
    return fetch(`http://localhost:8088/contacts/${contactId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(response => response.json())
        .then(() => {
            const hiddenContactId = document.querySelector("#contactId")
            hiddenContactId.value = ""
        })
}



export default {
    getContactsData,
    saveNewContact,
    deleteContact,
    updateFormFields,
    editContact
}