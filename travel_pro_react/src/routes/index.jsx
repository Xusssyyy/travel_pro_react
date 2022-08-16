import React,{lazy,Suspense} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '@/pages/home'
// import Hotel from '@/pages/hotel'
// import Search from '@/pages/search'
// import City from '@/pages/city'
// import Order from '@/pages/order'
// import Mine from '@/pages/mine'
// import Demestic from '@/pages/hotel/demestic'
// import Oversea from '@/pages/hotel/oversea'
// import Houroom from '@/pages/hotel/houroom'
// import Relaxroom from '@/pages/hotel/relaxroom'
// import Apartment from '@/pages/hotel/apartment'

const Hotel = lazy(() => import('@/pages/hotel'))
const Search = lazy(() => import('@/pages/search'))
const City = lazy(() => import('@/pages/city'))
const Order = lazy(() => import('@/pages/order'))
const Mine = lazy(() => import('@/pages/mine'))
const Demestic = lazy(() => import('@/pages/hotel/demestic'))
const Oversea = lazy(() => import('@/pages/hotel/oversea'))
const Houroom = lazy(() => import('@/pages/hotel/houroom'))
const Relaxroom = lazy(() => import('@/pages/hotel/relaxroom'))
const Apartment = lazy(() => import('@/pages/hotel/apartment'))

export default function RoutesConfig() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/hotel" element={<Hotel/>}>
                {/* 二级路由 */}
                <Route path="/hotel" element={<Demestic/>}/>
                <Route path="/hotel/demestic" element={<Demestic />} />
                <Route path="/hotel/oversea" element={<Oversea />} />
                <Route path="/hotel/houroom" element={<Houroom />} />
                <Route path="/hotel/relaxroom" element={<Relaxroom />} />
                <Route path="/hotel/apartment" element={<Apartment />} />
            </Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path='/city' element={<City/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
            <Route path='/mine' element={<Mine/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}
