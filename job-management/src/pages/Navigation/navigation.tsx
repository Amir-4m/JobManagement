import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {
    NavigationContainer,
    NavLink,
    NavLinks,
    LogoContainer,
    ItemContainer
} from './navigation.styles';

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <ItemContainer>
                    <NavLinks>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/add-job'>Request Service</NavLink>
                        <NavLink className='nav-link' to='/'>How It Works</NavLink>
                        <NavLink className='nav-link' to='/'>Integrations</NavLink>
                        <NavLink className='nav-link' to='/'>Pricing</NavLink>
                        <NavLink className='nav-link' to='/'>FAQ</NavLink>
                    </NavLinks>

                </ItemContainer>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}
export default Navigation;