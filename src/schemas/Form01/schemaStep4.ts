import {z} from 'zod';

export const Step03Schema = z.object({
    bairro: z.string().nonempty('this filed is required'),
    city: z.string().nonempty('this filed  is required'),
    state: z.string().nonempty('this filed is required')
})

export type Form03schema = z.infer<typeof Step03Schema>;