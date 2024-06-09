import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  display: flex;
  width: 100%;
  color: #fff;
  background-color: #192937;
  align-items: center;
  padding: 7px;
  font-family: Quicksand, sans-serif;
  display: flex;
`

export const ItemContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  color: #fff;

}
`

export const LogoContainer = styled(Link)`
  height: 100 %;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50 %;
  height: 100 %;
  display: flex;
  align - items: center;
  justify - content: flex - end;
  margin: auto;
`

export const NavLink = styled(Link)`
  color: #fff;
  letter-spacing: -.02em;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0.75rem;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none;
  transition: all .35s;
  &:hover {
  color: #fff;
  background-color: #213443;
  border-radius: 0.75rem;
  }

`

export const ButtonContainer = styled(Link)`
  grid-column-gap: 8px;
  align-items: center;
  display: flex;
  text-decoration: none;
  margin: auto auto auto 10px;


`
export const BookButton = styled(Link)`

`
export const LoginButton = styled(Link)`

`
