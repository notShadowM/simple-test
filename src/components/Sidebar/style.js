import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 75px;
  background: linear-gradient(180deg, rgba(245,15,24,1) 0%, rgba(252,70,107,1) 67%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 32px;
  position: fixed;
  left: 0;
  top:0;
  transform: ${({toggle}) => toggle?"translateX(0)":"translateX(-100%)"};
  transition: all .5s ease-in-out;
  overflow:auto;

    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e48f;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 100px;
      border: 2px solid rgba(0,0,0,0.5);
      background-clip: content-box;
      background-color: ${({ theme }) => theme.body};
    }
`;

export const navItem = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 5px;
  padding:2px;
  border: ${({selected}) => selected?"solid 2px rgb(255,255,255,0.7)":"solid 2px transparent"};
  border: ${({unselectable}) => unselectable==="Logout" && "solid 2px transparent"};
  border-radius: 5px;
  width: 90%;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover{
    border: ${({unselectable,selected}) => unselectable==="Logout" || selected?"":"solid 2px rgb(255,255,255,0.4)"};
    transition: all .2s ease-in-out;
  }
`;

export const navTitles = styled.div`
  color:#fff;
  font-size: 10px;
`;

export const menuBtn = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  cursor: pointer;
  transition: all .5s ease-in-out;
  top:0px;
  left: 5px;
`;

export const burger = styled.div`
  width: 30px;
  height: 3px;
  background: ${({toggle}) => toggle?" #fff":"#000"};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
  transform: ${({toggle}) => toggle && "translateX(-50px)"};
  background: ${({toggle}) => toggle && "transparent"};
  box-shadow: ${({toggle}) => toggle && "none"};

  &::before,&::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: ${({toggle}) => toggle?" #fff":"#000"};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }

  &::before{
    transform: translateY(-10px);
    transform:${({toggle}) => toggle && "rotate(45deg) translate(35px, -35px)"};
  }
  &::after{
    transform: translateY(10px);
    transform:${({toggle}) => toggle && "rotate(-45deg) translate(35px, 35px)"};
}
`;
