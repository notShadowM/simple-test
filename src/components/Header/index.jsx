import React from 'react'
import * as S from './style'
import { Icon } from '@iconify/react';

export default function Header({nav,data}) {

  const headerData = {
    "Campaign":
      <S.details>
        <S.btn>join</S.btn>
        <S.create><Icon icon="akar-icons:circle-plus" /> Create Campaign</S.create>
      </S.details>,
    "Content":
      <S.details>
        <S.btn>Watch more</S.btn>
        <S.create><Icon icon="akar-icons:circle-plus" /> Add content</S.create>
      </S.details>,
    "Ship Sample":
      <S.details>
        <S.btn>Test a Sample</S.btn>
      </S.details>,
    "Billing":
      <S.details>
        <S.btn>know more</S.btn>
      </S.details>,
    "Orders":
      <S.details>
        <S.btn>Buy now</S.btn>
      </S.details>,
  }

  return (
    <S.Container>
      <S.category>
        {nav} 
        <Icon icon="ic:baseline-keyboard-arrow-right" width="18" height="18"/> 
        <S.name> Kevin Alex</S.name>
      </S.category>

      {data.map((e) =>{
        return(
          <S.data>
            <S.create><Icon icon="akar-icons:circle-plus" /> {e}</S.create>
          </S.data>
        )
      })}

      {headerData[nav]}

    </S.Container>
  )
}
