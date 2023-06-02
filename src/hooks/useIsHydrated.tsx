import React from 'react'


const useIsHydrated = () => {
    const [isHydrated, setIsHydrated] = React.useState(false)

    React.useEffect(() => {
        setIsHydrated(true)
    }, [])
  return (
    isHydrated
  )
}

export default useIsHydrated