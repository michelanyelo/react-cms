import {Contact} from "../schemas/Contact.tsx";

interface Props {
    contacts: Contact[];
    onClick: (id: string) => void;
}

const ContactTable = ({contacts, onClick}: Props) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Tipo</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map(({id, name, lastname, email, type}) => (
                <tr
                    style={{cursor: 'pointer'}}
                    key={id}
                    onClick={() => onClick(id)}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>{email}</td>
                    <td>{type}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ContactTable;