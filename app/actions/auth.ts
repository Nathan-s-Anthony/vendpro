import { FormState, LoginFormSchema } from '@/app/lib/definitions'
import { loginUser } from '../api/services/login';
import { redirect } from 'next/navigation';

export async function login(state: FormState, formData: FormData) {
  console.log("LOGIN SUBMITTED");

  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const resp = await loginUser(validatedFields.data.email, validatedFields.data.password);
  console.log(resp, "response from login from");
  if (resp.status === 200) {
    redirect("/dashboard/overview");

  }
  return {
    apiResponse: {
      data: resp?.data?.user?.id,
      message: resp?.message,
      status: resp?.status,
    },
    values: {
      email: formData.get("email") as string,
      password: formData.get("password") as string,

    },
  };
}