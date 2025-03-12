import {FormProvider, useForm} from "react-hook-form";
import Input from "./Input.tsx";

const ContactForm = () => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
                <Input name={"name"} type={"text"}>Nombre</Input>
                <Input name={"lastname"} type={"text"}>Apellido</Input>
                <Input name={"email"} type={"email"}>Correo</Input>
                <button>Enviar</button>
            </form>
        </FormProvider>
    );
};

export default ContactForm;