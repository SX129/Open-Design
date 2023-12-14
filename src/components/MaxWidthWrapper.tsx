import React, {ReactNode} from 'react'

// Component to ensure dynamic changes on components
const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string,
    children: ReactNode
}) => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20'>
        {children}
    </div>
  )
}

export default MaxWidthWrapper