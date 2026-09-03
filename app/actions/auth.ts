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

  const resp = await loginUser(validatedFields.data.email, validatedFields.data.password);

  // Call the provider or db to create a user...
  return {
    apiResponse: {
      message: resp?.message,
      status: resp?.status,
    },
    values: {
      email: formData.get("email") as string,
      password: formData.get("password") as string,

    },
  };
}