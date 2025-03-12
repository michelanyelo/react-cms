import ContactForm from "./ContactForm.tsx";
import ContactTable from "./ContactTable.tsx";
import {useState} from "react";
import {Contact} from "../schemas/Contact.tsx";

const Layout = () => {

    const [contacts, setContacts] = useState<Contact[]>([]);
    const addContact = (contact: Contact) => {
        setContacts([
            {
                ...contact,
                id: Math.random().toString(16).slice(2),
            },
            ...contacts,
        ])
    };

    console.log(contacts);

    const deleteContact = (id: string) => setContacts(contacts.filter(c => c.id !== id));

    return (
        <div className={"container"}>
            <div className={"row "}>
                <div className={"col"}>
                    <ContactForm onSubmit={addContact}/>
                </div>
            </div>
            <div className={"row "}>
                <div className={"col"}>
                    <ContactTable/>
                </div>
            </div>
        </div>
    );
};

export default Layout;