
  import {z} from 'zod';
  
  export const Step13Schema = z.object({
    tipodeRedimento01: z.string().nonempty('this filed is required'),
    tipodeRedimento02: z.string().nonempty('this filed  is required'),
    fontPagadora: z.string().nonempty('this filed is required'),
    valorRecebido: z.string().nonempty('this filed is required'),
    IR: z.string().nonempty('this filed is required')
  })
  
  export type Form13schema = z.infer<typeof Step13Schema>;