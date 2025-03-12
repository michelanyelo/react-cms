import {z} from 'zod'
import {contactTypes} from "../components/Constants.ts";

export const ContactSchema = z.object({
    name: z
        .string()
        .min(1, {message: 'El nombre es obligatorio'})
        .min(3, {message: 'El nombre debe tener al menos 3 caracteres'}),
    lastname: z
        .string()
        .min(1, {message: 'El apellido es obligatorio'})
        .min(3, {message: 'El apellido debe tener al menos 3 caracteres'}),
    email: z
        .string()
        .min(1, {message: 'El correo es obligatorio'})
        .email({message: 'El correo no es válido'}),
    type: z
        .enum(contactTypes, {
            errorMap: () => ({message: 'El tipo de contacto es obligatorio'}),
        }),
})

export type ContactFormData = z.infer<typeof ContactSchema>;
export type Contact = ContactFormData & { id: string };

