import React, { useState } from 'react';
import * as S from "./style";
import { Icon } from '@iconify/react';

export default function Sidebar({nav,setNav}) {
  const [toggle,setToggle] = useState(false);
  

  const icons = [
    {title:"Campaign",icon:"ic:outline-campaign"},
    {title:"Content",icon:"bi:camera-video"},
    {title:"Ship Sample",icon:"ant-design:book-outlined"},
    {title:"Billing",icon:"ri:bill-line"},
    {title:"Orders",icon:"akar-icons:shopping-bag"},
    {title:"Settings",icon:"bytesize:settings"},
    {title:"Logout",icon:"websymbol:logout"},
  ]

  return (
    <>
      <S.MenuBtn onClick={e => setToggle(prev => !prev)}>
        <S.Burger toggle={toggle} />
      </S.MenuBtn>
      <S.Container toggle={toggle}>
        {
        icons.map(({icon,title},index) => 
          <S.NavItem key={index} unselectable={title} selected={nav===title} onClick={e => setNav(title)}>
            <Icon icon={icon} color="#FFF" width="36" />
            <S.NavTitles>{title}</S.NavTitles>
          </S.NavItem>)
        }
      </S.Container>
    </>
  )
}
