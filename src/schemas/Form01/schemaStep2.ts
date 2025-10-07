import {z} from 'zod';

export const Step02Schema = z.object({
     telephone: z.string().min(10).nonempty('min 10 caracteres'),
     ocupation: z.string().nonempty('min 10 caracteres'),
     civelState: z.enum(['solteiro(a)', 'casado(a)','divorciado(a)','viúvo(a)'])
     .refine((val) => val !== undefined, {message: 'Estado civel é obrigatorio'})
})

export type Form02schema = z.infer<typeof Step02Schema>;