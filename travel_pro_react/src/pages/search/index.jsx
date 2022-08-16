import React from 'react'
import { Wrapper, SearchHead,NavSearch } from './style'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
    <Wrapper>

      <SearchHead>
        <div className='icon'>
          <Link to='/home'>
            <span>&lt;</span>
          </Link>
        </div>
        <div className='searchwrapper'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAhpJREFUeNqslUsoRGEUx++MUULZSBE2HhNJSZGilLHwWMisKUUaZUFKKa8aFkpNo9mxUOwsjJg8Nh6hJAtNQll4NYUFeT/H/6szdbq+e++Y5l+/+s433P93zz3fOSaXZ0qRKA7YQSPIBxkgBlyBXTAHFsGPYiCLZE882A3SJL9lE03AD9rBjp6Bma1NYJxOl6YYqwBsgI5wDUZBN4ufwBgoBYkgARQDJ7hnGfCANiODOtDL9rdALu3tgWfwAg5AP8gBq+zvRUqtWgbiFC5KkdAmsIGAzpvfgVrgY0Xh1DKopw8n9A6awUcY3+AbtIBHVhxWmYGdxTPgXAlfN2CSFYldZlDE4gXl//KydYnMIJXFxxEYnLB1pswgicVfERh86V1cM+UxpPQIDNJV1fXH4IjFtggMqtjaLzNYZnEriP/Hw2OBg8UrMoNZ8EpxqtaF0VAfyKL1mZaBuLETbK+L/tFk8PBOMMjiAVmRhHrRMDhk+yN0mnJJxy2l++JWHaJQbx68UMNbZ69cTYjKOAVBanIpGm8kGuMbGNIaOGJalYFpUMP2kwm1gtS74tieSNknZeDPPBC6pS7ZQF1VNhJFI5wHFaASPKh+d/K5YtHpL146eR5dJnGYa7BPw0hhs2SFBlJI4/TB3RaDSrmj4aOnbWr5S6o7JGZMwKxER+uU1jdVxTmiZSC0RvOAD6tLixJd+Shd4qJegJ5fAQYAV3FsdeVWpHsAAAAASUVORK5CYII=" alt="" />
          <input placeholder="目的地/酒店/景点/关键字"  />
        </div>
      </SearchHead>

      <NavSearch>
        <h3>热门搜索</h3>
        <div className='hot'>
          <span>北京</span>
          <span>天津</span>
          <span>秦皇岛</span>
          <span>西安</span>
          <span>塞班岛</span>
          <span>八达岭长城</span>
          <span>颐和园</span>
          <span>天坛公园</span>
        </div>
      </NavSearch>
    </Wrapper>

  )
}
