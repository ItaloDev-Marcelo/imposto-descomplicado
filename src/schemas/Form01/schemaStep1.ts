import {z} from 'zod';

export const Step01Schema = z.object({
    Name: z.string().min(2).nonempty('Name is required'),
    birthday: z.string().nonempty('Birthday is required'),
    email: z.string().nonempty('Email is required')
})

export type Form01schema = z.infer<typeof Step01Schema>;