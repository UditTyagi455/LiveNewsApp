import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};
export  const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must not exceed 40 characters'),
});

