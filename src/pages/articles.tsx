import Avatar from '@/components/Avatar'
import useIsHydrated from '@/hooks/useIsHydrated'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

type Rss = {
  items: []
}

export const getServerSideProps: GetServerSideProps<{
  rss: Rss
}> = async () => {
  const { parse } = require('rss-to-json')

  var rss = JSON.parse(
    JSON.stringify(await parse('https://medium.com/feed/@dshcher'))
  )

  return {
    props: {
      rss,
    },
  }
}

const ArticlesPage = ({
  rss,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isHydrated = useIsHydrated()

  return isHydrated ? (
    <section className='p-10 flex flex-col items-center '>
      <h1 className='text-3xl sm:text-5xl font-bold font-ds text-shadow'>Articles</h1>
      <div className='flex flex-col items-center relative'>
        <div className='hidden md:block absolute pattern h-[80vh] w-10 -left-32'></div>
        <div className='hidden lg:block absolute pattern h-[80vh] w-10 -scale-x-100 -right-32'></div>
        {rss.items.map((item: any) => (
          <Link
            href={item.link}
            key={item.id}
            className={
              'bg-white mt-10 shadow-lg shadow-white/30 rounded-md'
            }
          >
            <div className='flex flex-col gap-3 max-w-xl px-4 py-3'>
              <h2 className='text-lg font-bold text-black'>{item.title}</h2>
              <p
                className='text-sm line-clamp-3 text-black '
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  ) : null
}

export default ArticlesPage
