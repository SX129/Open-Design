import { cn } from '@/lib/utils'
import React, {ReactNode} from 'react'

// Component to ensure a default look on other components with the option to adjust the look
const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string,
    children: ReactNode
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper