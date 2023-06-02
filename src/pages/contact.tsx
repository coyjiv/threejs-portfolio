'use client'
import useIsHydrated from '@/hooks/useIsHydrated'
import { useFormik } from 'formik'
import { validationSchema } from '@/utils/validationSchema'

type Props = {}


const UsesPage = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      fetch('/api/sendMessage', {
        method: 'POST',
        body: JSON.stringify({ values }),
      })
      formik.resetForm()
    },
  })
  const isHydrated = useIsHydrated()
  
  

  return isHydrated ? (
    <div className='isolate mx-5 my-10 bg-black rounded-xl border border-white px-6 py-14 sm:py-24 lg:px-8'>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      ></div>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3x font-ds font-bold text-white sm:text-4xl'>
          Let&apos;s get in touch
        </h2>
        <p className='mt-5 text-sm sm:text-lg leading-8 text-white'>
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        action='#'
        method='POST'
        className='mx-auto mt-10 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-semibold leading-6 text-white'
            >
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                id='first-name'
                autoComplete='given-name'
                className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                {...formik.getFieldProps('firstName')}
              />
              {formik.errors.firstName && formik.touched.firstName ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.firstName}
                  </div>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-semibold leading-6 text-white'
            >
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                id='last-name'
                autoComplete='family-name'
                className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                {...formik.getFieldProps('lastName')}
              />
              {formik.errors.lastName && formik.touched.lastName ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.lastName}
                  </div>
              ) : null}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm font-semibold leading-6 text-white'
            >
              Company
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                id='company'
                autoComplete='organization'
                className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                {...formik.getFieldProps('company')}
              />
              {formik.errors.company && formik.touched.company ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.company}
                  </div>
              ) : null}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-white'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                id='email'
                autoComplete='email'
                className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.email}
                  </div>
              ) : null}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='phone-number'
              className='block text-sm font-semibold leading-6 text-white'
            >
              Phone number
            </label>
            <div className='relative mt-2.5'>
              <input
                type='tel'
                id='phone-number'
                autoComplete='tel'
                className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                {...formik.getFieldProps('phoneNumber')}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.phoneNumber}
                  </div>
              ) : null}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold leading-6 text-white'
            >
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                id='message'
                rows={4}
                className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                {...formik.getFieldProps('message')}
              />
              {formik.errors.message && formik.touched.message ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.message}
                  </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  ) : null
}

export default UsesPage
