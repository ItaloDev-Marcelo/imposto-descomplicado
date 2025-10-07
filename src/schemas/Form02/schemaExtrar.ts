

  import {z} from 'zod';
  
  export const StepExtrarSchema = z.object({
      depedente01: z.string().nonempty('this filed is required'),
      cpf01: z.string().nonempty('this filed  is required'),
      teto01: z.string().nonempty('this filed is required'),
      depedente02: z.string().nonempty('this filed is required'),
      cpf02: z.string().nonempty('this filed  is required'),
      teto02: z.string().nonempty('this filed is required'),
      depedente03: z.string().nonempty('this filed is required'),
      cpf03: z.string().nonempty('this filed  is required'),
      teto03: z.string().nonempty('this filed is required')
  })
  
  export type ForExtrarschema = z.infer<typeof StepExtrarSchema>;