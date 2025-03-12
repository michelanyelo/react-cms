import {FormProvider, useForm} from "react-hook-form";
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {ContactFormData, ContactSchema} from "../schemas/Contact.tsx";
import {contactTypes} from "./Constants.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import Select from "./Select.tsx";

interface Props {
    onSubmit: (contact: ContactFormData) => void;
}

const ContactForm = ({onSubmit}: Props) => {
    const methods = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    })

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name={"name"} type={"text"}>Nombre</Input>
                <Input name={"lastname"} type={"text"}>Apellido</Input>
                <Input name={"email"} type={"email"}>Correo</Input>
                <Select options={contactTypes} defaultMessage={"-- Selecciona tipo --"} label={"Tipo de contacto"}
                        name={"type"}/>
                <Button>Enviar</Button>
            </form>
        </FormProvider>
    );
};

export default ContactForm;