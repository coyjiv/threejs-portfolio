import Email from '@/components/Email'
import { render } from '@react-email/render'
const sendgrid = require('@sendgrid/mail')

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '')

const emailHtml = (values: any) =>
  render(
    Email({
      firstName: values.firstName,
      lastName: values.lastName,
      company: values.company,
      email: values.email,
      message: values.message,
      phone: values.phoneNumber,
    })
  )

export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const values = JSON.parse(req.body).values
            console.log(values)
      const email = emailHtml(values)
      const options = {
        from: 'dshcheerbakov@gmail.com',
        to: 'djdaniil46@gmail.com',
        subject: 'New message from portfolio website',
        html: email,
      }
        sendgrid.send(options).then((response: any) => {
        console.log(response);
        }).catch((error: any) => {
        console.error(error);
        })
        
      
        res.status(200).json({ message: 'Message sent' })
    
    } catch (error:any) {
      console.error(error)
      res.status(400).json({ message: error.message })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
