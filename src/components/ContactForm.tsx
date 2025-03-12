import {useForm} from "react-hook-form";

const ContactForm = () => {
    const methods = useForm()

    return (
        <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input {...methods.register('name')} type="text" className="form-control" id="name"/>
            </div>
        </form>
    );
};

export default ContactForm;