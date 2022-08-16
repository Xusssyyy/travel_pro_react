import React from 'react'
import { Navbar } from './style'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Navbar>
        <ul className='list1'>
          <li>
            <Link to='/hotel'>
            <img src="https://img1.40017.cn/cn/h/elong_h5/hoteltaro/static/home/home-t.png" alt="" />
            <p>首页</p>
            </Link>
          </li>
          <li>
            <Link to='/order'>
            <img src="https://img1.40017.cn/cn/h/elong_h5/hoteltaro/static/home/home-t.png" alt="" />
            <p>订单</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://img1.40017.cn/cn/h/elong_h5/hoteltaro/static/home/home-t.png" alt="" />
            <p>电话</p>
            </Link>
          </li>
          <li>
            <Link to='/mine'>
            <img src="https://img1.40017.cn/cn/h/elong_h5/hoteltaro/static/home/home-t.png" alt="" />
            <p>我的</p>
            </Link>
          </li>
        </ul>
    </Navbar>
  )
}
