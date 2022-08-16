import React from 'react'
import { useEffect,memo  } from 'react'
import {getcityList } from './store/actionCreators'
import { CityWrapper } from './style'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const City = (props) => {
  const { getcity, getcityDispatch} = props
  useEffect(() => {
      getcityDispatch()
  },[])

  const renderCities = () => {
      return getcity.map(({ id, nm }) => {
          return <Link
              className="city_name"
              // 路由除了页面跳转  还可以多页面传参
              to={{
                  pathname: '/home',
                  search: `name=${nm}`
              }}
              key={id}>
              {nm}
          </Link>
      })
  }
  return (
      <CityWrapper>
          {renderCities()}
      </CityWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
      getcity: state.getcity.cityList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      getcityDispatch() {
          dispatch(getcityList())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(City))
