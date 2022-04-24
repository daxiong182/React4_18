import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function () {
    const [search,setSearch]=useSearchParams()

  return (    
    <div>
        <ul>
            <li>
                <button onClick={()=>setSearch('id=008&title=哈哈&content=略略')}>点我更新search参数</button>
            </li>
            <li>{search.get('id')}</li>
            <li>{search.get('title')}</li>
            <li>{search.get('content')}</li>
        </ul>
    </div>
  )
}
