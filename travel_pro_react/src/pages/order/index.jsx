import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavOrder } from './style'

export default function Order() {
  const navigate = useNavigate()
  return (
    <NavOrder>
        <span onClick={() => navigate(-1)}>&lt;</span>
        <span><h4>订单详情</h4></span>
    </NavOrder>
  )
}
