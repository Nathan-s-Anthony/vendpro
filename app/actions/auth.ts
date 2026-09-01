import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { loginUser } from '../api/services/login';
 
export async function login(state: FormState, formData: FormData) {
      console.log("LOGIN SUBMITTED");

  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
   loginUser(formData.get('email'), formData.get('password'));

  // Call the provider or db to create a user...
}