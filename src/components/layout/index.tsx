import Header from './Header'
import MainContainer from './MainContainer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainContainer>
        <Header />
        {children}
      </MainContainer>
    </>
  )
}
