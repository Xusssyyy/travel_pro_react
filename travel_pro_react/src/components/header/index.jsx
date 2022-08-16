import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Wrapper,Head,Navbar } from './style'
import classnames from 'classnames'
 
export default function Header() {
  const {pathname}=useLocation()
  return (
    <Wrapper>
      <Head>
        <Link to='/home'>
          <span>&lt;</span>
        </Link>
        <Link to="/hotel/demestic" className={classnames({active:pathname == '/hotel/demestic'})}>
          <span>国内</span>
        </Link>
        <Link to="/hotel/oversea" className={classnames({active:pathname == '/hotel/oversea'})}>
          <span>海外</span>
        </Link>
        <Link to="/hotel/houroom" className={classnames({active:pathname == '/hotel/houroom'})}>
          <span>钟点房</span>
        </Link>
        <Link to="/hotel/relaxroom" className={classnames({active:pathname == '/hotel/relaxroom'})}>
          <span>休闲房</span>
        </Link>
        <Link to="/hotel/apartment" className={classnames({active:pathname == '/hotel/apartment'})}>
          <span>民宿公寓</span>
        </Link>
      </Head>
      <Navbar>
        <img src="https://file.40017.cn/img140017cnproduct/cn/h/elong_h5/hoteltaro/static/home/default370_64.png" alt="" />
      </Navbar>
    </Wrapper>
  )
}
