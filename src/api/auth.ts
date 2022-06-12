import client from './client';

export interface SignInProps {
  email: string;
  password: string;
}

export type UserAuthRole = 'ADMIN';

export interface SignUpProps {
  // Auth data
  role?: UserAuthRole;
  password?: string;
  email: string;
  // Profile data
  phone?: string,
  firstName: string,
  lastName: string,

}

interface ValidateLoginProps {
  refresh_token: string;
  user_id: string;
}



const signin = async (auth: SignInProps) => {
  const res = await client.post('/user/login', auth);

  if (res.data.status === 'failed') {
    throw new Error(res.data.message);
  }

  return res.data;
};

const signup = async (auth: SignUpProps) => {
  const res = await client.post('/user/signup', auth);

  if (res.data.status === 'failed') {
    throw new Error(res.data.message);
  }

  return res.data;
};

const getOtp = async (otp: string) => {
  const res = await client.get('/user/otp')

  if (res.data.status === 'failed') {
    throw new Error(res.data.message);
  }

  return res.data;
}

const verifyOtp = async (otp: string) => {
  const res = await client.patch('/user/verify', otp )

  if (res.data.status === 'failed') {
    throw new Error(res.data.message);
  }

  return res.data;
}

const validateLogin = async ({ refresh_token, user_id }: ValidateLoginProps) =>
  await client.post('/user/validate', {
    refresh_token,
    user_id,
  });



export default {
  signin,
  signup,
  getOtp,
  verifyOtp,
  validateLogin
};
