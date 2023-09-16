/* eslint-disable react/no-unescaped-entities */

const AboutPage = () => {
  return (
      <section className='p-10 px-4 flex flex-col lg:flex-row gap-20 lg:gap-10 lg:mt-10 justify-center w-full'>
        <div>
          <div className='relative'>
            <video poster='/chel0.jpg' width={500} height={500} playsInline preload='metadata' className='w-full mask ' autoPlay loop muted>
              <source src='/chel1.webm' type='video/webm' />
              <source src='/chel.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='flex flex-col lg:w-1/2'>
          <h1 className='text-4xl font-bold font-ds text-center mb-5 text-shadow'>
            About Me
          </h1>
          <div className='h-[400px] px-6  overflow-y-scroll space-y-5 scroll-custom '>
            <p className='text-lg text-left leading-7 font-medium'>
              Hello there! I'm Daniel, a 21-year-old web wizard from Łódź,
              bringing together the realms of design, music, and animation to
              create unique web experiences. Over the years, I've worn many hats
              - from a photographer to a videographer, even to a music video
              director. However, my heart always finds its way back to web
              development.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              In the last three years, I've been working as a front-end
              developer, starting my journey as a freelancer and moving onto
              working at Gravity and Processica. These experiences enabled me to
              dive deep into various technologies and processes. I have garnered
              significant experience in React, Redux, Next.js, and more
              recently, module federation for micro-frontends.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              I have had the pleasure of working on React components to extend
              the functionality of Bubble, a no-code platform, ironically.
              Eventually, I later got an opportunity to work on a React Native
              project, which I dived into successfully despite not having
              previous experience.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              While I love experimenting with all things code, I have a soft
              spot for Tailwind CSS, although I can comfortably work with
              vanilla CSS or preprocessors like SASS/SCSS. I also enjoy using
              CSS-IN-JS solutions like StyledComponents and libraries such as
              Firebase.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              I'm incredibly proud of my work on a reproducible demo that
              supports large-scale micro frontends based on module federation.
              It was a thrilling experience to present the POC to our team,
              signifying my understanding of how this concept could help improve
              application scalability and robustness.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              But life isn't all about work! In my free time, you'll often find
              me creating music or abstract 3D animations – all the while,
              continuously looking for ways to incorporate these passions into
              my work.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              I believe that the joy of learning is a journey, not a
              destination. That's why I continuously challenge myself, looking
              to enhance my skills and experiment with new techniques whenever I
              can. My experiences at Code&Cakes and Expleo have not only refined
              my React, Redux, and TypeScript skills but also made me adept at
              collaborating with diverse teams and creating user experiences
              that resonate with the audience.
            </p>
            <p className='text-lg text-left leading-7 font-medium'>
              So, if you're looking for someone who brings a creative twist to
              front-end development, you're in the right place. Let's make the
              web a more beautiful and interactive space together!
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutPage
