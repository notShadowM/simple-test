import styled from "styled-components";
import {device} from "../../../sizes/device"

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 65px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media ${device.tablet}{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    padding-left: 85px;
  }
`;

export const category = styled.div`
  font-size: 12px;
  color: #000;
  display: flex;
  align-items: center;  
`;

export const name = styled.div`
  color: #FF1493;
  font-size: 14px;
  font-weight: bold;

`;

export const create = styled.div`
  color: #FF1493;
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
  font-size: 12px;
`;

export const btn = styled.button`
  background: linear-gradient(180deg, rgba(245,15,24,1) 0%, rgba(252,70,107,1) 67%);
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 0px 20px;
  height: 25px;
`;

export const details = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
  @media ${device.mobileM}{
    flex-basis:45%;
    display: flex;
    justify-content: right;
    gap: 20px;
  }
`;

export const data = styled.div`
  display: flex;
  justify-content: center;
`;

