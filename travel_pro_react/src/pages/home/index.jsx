import React from 'react'
import { Wrapper,SearchHeader,Navbar,NavWrapper,NavList } from './style'
import SelectCity from '@/components/selectcity'
import {Link} from 'react-router-dom'
import { useSearchParams} from 'react-router-dom'

import HotRecommend from '@/components/hotrecommend'

export default function Home() {
  const [search] = useSearchParams()
  const cityName = search.get('name') || ''
  return (
    <Wrapper>
      <SearchHeader>
        <div className="citygps">
          <SelectCity cityName={cityName}/>
          <span className='img'>
            <img src="https://file.40017.cn/appresource/image/touch/home/arrow_down.png" alt="" />
          </span>
        </div>
        <div className='searchgroup'>
          <Link to='/search'>
              <h2>目的地/酒店/景点/关键字</h2>
              {/* 搜索换成图标 */}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAhpJREFUeNqslUsoRGEUx++MUULZSBE2HhNJSZGilLHwWMisKUUaZUFKKa8aFkpNo9mxUOwsjJg8Nh6hJAtNQll4NYUFeT/H/6szdbq+e++Y5l+/+s433P93zz3fOSaXZ0qRKA7YQSPIBxkgBlyBXTAHFsGPYiCLZE882A3SJL9lE03AD9rBjp6Bma1NYJxOl6YYqwBsgI5wDUZBN4ufwBgoBYkgARQDJ7hnGfCANiODOtDL9rdALu3tgWfwAg5AP8gBq+zvRUqtWgbiFC5KkdAmsIGAzpvfgVrgY0Xh1DKopw8n9A6awUcY3+AbtIBHVhxWmYGdxTPgXAlfN2CSFYldZlDE4gXl//KydYnMIJXFxxEYnLB1pswgicVfERh86V1cM+UxpPQIDNJV1fXH4IjFtggMqtjaLzNYZnEriP/Hw2OBg8UrMoNZ8EpxqtaF0VAfyKL1mZaBuLETbK+L/tFk8PBOMMjiAVmRhHrRMDhk+yN0mnJJxy2l++JWHaJQbx68UMNbZ69cTYjKOAVBanIpGm8kGuMbGNIaOGJalYFpUMP2kwm1gtS74tieSNknZeDPPBC6pS7ZQF1VNhJFI5wHFaASPKh+d/K5YtHpL146eR5dJnGYa7BPw0hhs2SFBlJI4/TB3RaDSrmj4aOnbWr5S6o7JGZMwKxER+uU1jdVxTmiZSC0RvOAD6tLixJd+Shd4qJegJ5fAQYAV3FsdeVWpHsAAAAASUVORK5CYII=" alt="" />
          </Link>
        </div>
        <div className='mine'>
          <img src="https://file.40017.cn/appresource/image/touch/home/icon_user.png" alt="" />
        </div>
      </SearchHeader>

      <Navbar>
        <ul className='list1'>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_train.png" alt="" />
            <p>火车票</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_fight.png" alt="" />
            <p>机票</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_hotel.png" alt="" />
            <p>酒店住宿</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_trip.png" alt="" />
            <p>景点门票</p>
            </Link>
          </li>
        </ul>
      </Navbar>
      
      <Navbar>
        <ul className='list2'>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_bus.png" alt="" />
            <p>汽车船票</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_car.png" alt="" />
            <p>打车出行</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_packagetour.png" alt="" />
            <p>周边跟团</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_inland.png" alt="" />
            <p>境内游</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_cruise.png" alt="" />
            <p>游轮</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_abroad.png" alt="" />
            <p>出境游</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_haiwan.png" alt="" />
            <p>海外玩乐</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_visa.png" alt="" />
            <p>签证</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_service_wifi.png" alt="" />
            <p>全球wife</p>
            </Link>
          </li>
          <li>
            <Link to='/hotel'>
            <img src="https://file.40017.cn/appresource/image/touch/home/icon_home_alltype.png" alt="" />
            <p>全球分类</p>
            </Link>
          </li>
        </ul>
      </Navbar>

      <NavWrapper>
        <ul className='list3'>
          <li>
            <h3>门票9.9元起</h3>
            <p>1亿补贴</p>
            <img src="https://pic5.40017.cn/04/000/11/1d/rBTJU11D8mWAP51uAAAP3iA6jmo471.png" alt="" />
          </li>
          <li>
            <h3>境内特卖</h3>
            <p>优质低价</p>
            <img src="https://file.40017.cn/appresource/image/touch/index/zheshangzhe.png" alt="" />
          </li>
        </ul>
      </NavWrapper>

      <NavWrapper>
        <img src="https://file.40017.cn/xcxpub/touch/home-banner_202206021449.png" alt="" />
      </NavWrapper>

      <NavList>
        <HotRecommend/>
      </NavList>
      
    </Wrapper>
  )
}
