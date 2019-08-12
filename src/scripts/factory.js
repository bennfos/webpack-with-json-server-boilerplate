const createHTMLContact = (contactObj) => {
    return `
    <div class="contactCard" id="contact--${contactObj.id}">
        <h2 class="contact contact--name" >${contactObj.name}</h2>
        <p class="contact contact--phoneNumber">${contactObj.phoneNumber}</p>
        <p class="contact contact--address">${contactObj.address}</p>
        <button class="delete" id="deleteContact--${contactObj.id}">Delete</button>
        <button class="edit" id="editContact--${contactObj.id}">Edit</button>
    </div>
`
}

const createNewContactObject = (name, phoneNumber, address) => {
    return {
            name: name,
            phoneNumber: phoneNumber,
            address: address
    }
}


export default {createHTMLContact, createNewContactObject}