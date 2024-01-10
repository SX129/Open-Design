import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { PRODUCT_CATEGORIES } from '@/config'
import React from 'react'

type Param = string | string[] | undefined

interface ProductsPageProps {
    searchParams: {[key: string]: Param}
}

const parse = (param: Param) => {
    return typeof param === "string" ? param : undefined
}

// Landing page for all products
const ProductsPage = ({searchParams}: ProductsPageProps) => {

    const sort = parse(searchParams.sort)
    const category = parse(searchParams.category)
    const label = PRODUCT_CATEGORIES.find(({value}) => value === category)?.label

  return (
    <MaxWidthWrapper>
        <ProductReel title={label ?? "Browse High-Quality Assets"} query={{category, limit: 40, sort: sort === "desc" || sort === "asc" ? sort : undefined}} />
    </MaxWidthWrapper>
  )
}

export default ProductsPage