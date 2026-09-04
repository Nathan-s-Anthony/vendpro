import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { loginUser } from '../api/services/login';
import { redirect } from 'next/navigation';

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
  console.log(resp, "response from login from");
  if (resp.status === 200) {
    redirect("/dashboard");
  }
  return {
    apiResponse: {
      data: resp?.data,
      message: resp?.message,
      status: resp?.status,
    },
    values: {
      email: formData.get("email") as string,
      password: formData.get("password") as string,

    },
  };
}