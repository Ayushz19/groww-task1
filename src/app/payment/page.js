import React from 'react'
import Payment from './Payment'
import Loader from '../Loader'
import { Suspense } from 'react';
const page = () => {
  return (
    <Suspense fallback={<Loader />}>
        <Payment />
    </Suspense>
  )
}

export default page