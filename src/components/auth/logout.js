import React, { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import { MenuItemLink, } from 'react-admin';
import { useSelector } from 'react-redux';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const MyLogoutButton = forwardRef((props, ref) => {
    const logout = useLogout();
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const handleClick = () => logout('/login');
    return (
        <MenuItemLink
                to="/login"
                primaryText="Logout"
                leftIcon={<ExitIcon />}
                onClick={handleClick}
                sidebarIsOpen={open}
        />
    );
});

export default MyLogoutButton;