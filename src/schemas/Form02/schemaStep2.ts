
  import {z} from 'zod';
  
  export const Step12Schema = z.object({
    tipodeRedimento: z.string().nonempty('this filed is required'),
    font: z.string().nonempty('this filed  is required'),
    valorRecebido: z.string().nonempty('this filed is required'),
    INSS: z.string().nonempty('this filed is required')
  })
  
  export type Form12chema = z.infer<typeof Step12Schema>;