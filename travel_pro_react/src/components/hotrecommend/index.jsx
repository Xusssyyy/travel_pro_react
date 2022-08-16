import React,{memo, useEffect} from 'react'
import { connect } from 'react-redux'
import Loading from '../loading'
import { gethotrecommendList } from './store/actionCreators'

const HotRecommend=(props)=> {
  const { gethotrecommend, gethotrecommendDispatch,enterLoading} = props

  useEffect(()=>{
    gethotrecommendDispatch()
  },[])

  const renderhotrecommend = () =>{
    return gethotrecommend.map(item => {
      return (
            <li key={item.id}>
                <img src={item.img} />
              <span>
                {item.title}
              </span>
              <p>
                {item.content}
              </p>
            </li>
      )
  })
  }

  return (
    <div>
      <h2>🔥热门推荐</h2>
      <ul className='hotlist'>
      {renderhotrecommend()}
      </ul>
      {enterLoading && <Loading/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      gethotrecommend: state.gethotrecommend.hotrecommendList,
      enterLoading: state.gethotrecommend.enterLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      gethotrecommendDispatch() {
          dispatch(gethotrecommendList())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(HotRecommend))