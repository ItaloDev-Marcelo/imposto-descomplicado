

  import {z} from 'zod';
  
  export const Step11Schema = z.object({
       fontPagadora: z.string().nonempty('this filed is required'),
      cnpj: z.string().nonempty('this filed  is required'),
      valorTotal: z.string().nonempty('this filed is required'),
      impostIRRF: z.string().nonempty('this filed is required')
  })
  
  export type Form11chema = z.infer<typeof Step11Schema>;