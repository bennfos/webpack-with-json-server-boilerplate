
import createHTMLContact from "./factory.js";



const contactListContainer = document.querySelector("#contactList__container")

const sortContacts = (contacts) => {
    contacts.sort(function(a, b) {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0;
    })
}


    const renderContacts = (contacts) =>{
        contactListContainer.innerHTML = ""
        sortContacts(contacts)
        for (let contact of contacts) {
            let contactHTML = createHTMLContact.createHTMLContact(contact)
        contactListContainer.innerHTML += contactHTML
        }
    }

export default {renderContacts, contactListContainer}