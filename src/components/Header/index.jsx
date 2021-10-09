import React from 'react'
import * as S from './style'
import { Icon } from '@iconify/react';

export default function Header({nav,data}) {

  const headerData = {
    "Campaign":
      <S.Details>
        <S.Btn>join</S.Btn>
        <S.Create><Icon icon="akar-icons:circle-plus" /> Create Campaign</S.Create>
      </S.Details>,
    "Content":
      <S.Details>
        <S.Btn>Watch more</S.Btn>
        <S.Create><Icon icon="akar-icons:circle-plus" /> Add content</S.Create>
      </S.Details>,
    "Ship Sample":
      <S.Details>
        <S.Btn>Test a Sample</S.Btn>
      </S.Details>,
    "Billing":
      <S.Details>
        <S.Btn>know more</S.Btn>
      </S.Details>,
    "Orders":
      <S.Details>
        <S.Btn>Buy now</S.Btn>
      </S.Details>,
  }

  return (
    <S.Container>
      <S.Category>
        {nav} 
        <Icon icon="ic:baseline-keyboard-arrow-right" width="18" height="18"/> 
        <S.Name> Kevin Alex</S.Name>
      </S.Category>

      {data.map((e) =>{
        return(
          <S.Data>
            <S.Create><Icon icon="akar-icons:circle-plus" /> {e}</S.Create>
          </S.Data>
        )
      })}

      {headerData[nav]}

    </S.Container>
  )
}
