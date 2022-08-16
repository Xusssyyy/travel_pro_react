import React,{memo, useEffect} from 'react'
import { connect } from 'react-redux'
import Loading from '../loading'
import { gethotlistList } from './store/actionCreators'
import LazyLoad from 'react-lazyload'
import loading from '@/assets/img/loading.gif'


const HotList=(props) => {
  const { gethotlist, gethotlistDispatch,enterLoading} = props
  useEffect(()=>{
    gethotlistDispatch()
  },[])

  const renderhotlist = () =>{
    return gethotlist.map(item => {
      return (
            <li key={item.id} className='hotlist'>
              <div>
                <LazyLoad 
                  placeholder={<img width="100%" 
                  height="120px" src={loading}/>}>
                  <img src={item.img} />
                </LazyLoad>
              </div>
              <div>
                <p className='name'>{item.name}</p>
                <span className='score'>{item.score}</span>
                <p className='address'>{item.address}</p>
                <span className='price'>{item.price}</span>
              </div>     
            </li>          
      )
  })
  }

  return (
    <div>
       <h2>热门酒店</h2>
       {renderhotlist()}
       {enterLoading && <Loading/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      gethotlist: state.gethotlist.hotList,
      enterLoading:state.gethotlist.enterLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      gethotlistDispatch() {
          dispatch(gethotlistList())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(HotList))