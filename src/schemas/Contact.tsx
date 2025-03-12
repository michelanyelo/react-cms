import {z} from 'zod'

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
    id: z
        .string().uuid()
})

export type Contact = z.infer<typeof ContactSchema> & { id: string }