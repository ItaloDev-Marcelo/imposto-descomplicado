import {z} from 'zod';

export const Step03Schema = z.object({
    Cpf: z.string().min(11).nonempty('Name is required'),
    Logradouro: z.string().nonempty('Logradouro is required'),
    address: z.string().nonempty('address is required')
})

export type Form03schema = z.infer<typeof Step03Schema>;