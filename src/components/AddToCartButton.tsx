"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

// Component for cart button on product page
const AddToCartButton = () => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [])

  return (
    <Button onClick={() => {setIsSuccess(true)}} size='lg' className='w-full'>{isSuccess ? "Added!" : "Add to cart"}</Button>
  )
}

export default AddToCartButton