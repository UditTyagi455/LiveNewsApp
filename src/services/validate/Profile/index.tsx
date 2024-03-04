import * as yup from 'yup';

export const initialValues = {
    username: '',
    fullName: '',
    email: '',
    phone: ''
};

export const validationSchema = yup.object().shape({
    username: yup.string()
        .required("Username is required"),
    fullName: yup.string()
        .required("Name is required"),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    phone: yup.string()
    .required("phone number is required")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')  
});

