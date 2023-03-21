import styled from 'styled-components';

interface IHeaderProps {
  height:string
}

export const HeaderContainer = styled.header<IHeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  height: ${(props)=>props.height};
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
