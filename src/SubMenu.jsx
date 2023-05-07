import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const SubMenu = () => {
  const { pageId,setPageId } = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)
  const handleMouseLeave=(event)=>{
    setPageId(null)
  }

  return (
    <div className={currentPage?'submenu show-submenu':'submenu'} onMouseLeave={handleMouseLeave}>
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{gridTemplateColumns:currentPage?.links?.length>3 ?'1fr 1fr':'1fr'}}>
{currentPage?.links?.map((link)=>{
  const{id,url,label,icon}=link;
  return <a key={id} href={url}>
    {icon}{label}
  </a>
})}
      </div>
    </div>
  )
}

export default SubMenu
