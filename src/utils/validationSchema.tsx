import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup.string().required('Phone is required').matches(/^[0-9]+$/, 'Must be only digits'),
    company: yup.string().required('Company is required'),
    message: yup.string().required('Message is required'),
});