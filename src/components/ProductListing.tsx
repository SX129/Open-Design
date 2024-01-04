import { Product } from '@/payload-types'
import React, { useState } from 'react'
import { Skeleton } from './ui/skeleton'

interface ProductListingProps {
    product: Product | null
    index: number
}

// Component to display link to product
const ProductListing = ({product, index}: ProductListingProps) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    if(true) return <ProductPlaceHolder />

  return (
    <div></div>
  )
}

// Component to display skeleton of loading product
const ProductPlaceHolder = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
                <Skeleton className='h-full w-full' />
            </div>
            <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
            <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
            <Skeleton className='mt-2 w-12 h-4 rounded-lg' />
        </div>
    )
}

export default ProductListing