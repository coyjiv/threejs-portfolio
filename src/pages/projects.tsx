import { projects as projectsData } from '@/constants/projects'
import Link from 'next/link'
type Props = {}

const ProjectsPage = (props: Props) => {
  const projects = projectsData.reverse()
  return (
    <section className='p-10 flex flex-col items-center '>
      <h1 className='text-3xl sm:text-5xl font-bold font-ds'>Projects</h1>
        <div className='left-0 md:block absolute pattern h-[80vh] w-5 lg:w-10 lg:-left-32'></div>
        <div className='right-0 md:block absolute pattern h-[80vh] w-5 lg:w-10 -scale-x-100 lg:-right-32'></div>
      <div className='flex flex-col items-center relative'>
        <div className='h-[60vh] overflow-y-scroll scroll-custom flex flex-col gap-10 mt-10 p-3 pb-10'>
          {projects.map((item: any) => (
            <div
              key={item.id}
              className='bg-white shadow-lg shadow-white/30 rounded-md w-full flex gap-3 items-center'
            >
              <div className='flex flex-col gap-3 max-w-xl px-4 py-3'>
                <h2 className='text-lg font-bold text-black'>{item.name}</h2>
                <p className='text-sm sm:line-clamp-3 text-black '>
                  {item.description}
                </p>
                <div className='flex gap-3'>
                  <Link href={item.github}>
                    <svg
                      className='text-black'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z'></path>
                    </svg>
                  </Link>
                  {item?.link && (
                    <Link href={item?.link}>
                      <svg
                        className='text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 13v10H0V4h12v2H2v15h17v-8h2zm3-12H13.012l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07L24 12V1z'></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='mt-10 text-sm'>That&apos;s not all!</p>
        <p className='max-w-md text-center text-xs'>
          Some of the projects I just can&apos;t show due to FDA, or the
          information is outdated and I have something new in my github, also I
          am not just &quot;fetching&quot; all my repos directly because it would be a
          mess, so... <br /> Check my github:{' '}
          <Link className='underline text-xs' href={'https://github.com/coyjiv'}>
            My Github
          </Link>
        </p>
      </div>
    </section>
  )
}

export default ProjectsPage
