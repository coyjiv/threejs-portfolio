import { Html } from '@react-email/html';

type Props = {
    message: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
}

const Email = (props: Props) => {

    return (
      <Html lang="en">
        <div>
            <h1>Message from {props.firstName} {props.lastName}</h1>
            <p>{props.message}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Company: {props.company}</p>
        </div>
      </Html>
    );
}

export default Email