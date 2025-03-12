import {FormProvider, useForm} from "react-hook-form";
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {Contact, ContactSchema} from "../schemas/Contact.tsx";
import {zodResolver} from "@hookform/resolvers/zod";

interface Props {
    onSubmit: (contact: Contact) => void;
}

const ContactForm = ({onSubmit}:Props) => {
    const methods = useForm<Contact>({
        resolver: zodResolver(ContactSchema),
    })

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name={"name"} type={"text"}>Nombre</Input>
                <Input name={"lastname"} type={"text"}>Apellido</Input>
                <Input name={"email"} type={"email"}>Correo</Input>
                <Button>Enviar</Button>
            </form>
        </FormProvider>
    );
};

export default ContactForm;