import { type } from '@testing-library/user-event/dist/type';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

type Element = {
    child: React.Component
}

export default class Navbar extends React.Component<{ element: ReactNode }> {
    /*constructor(element: Element) {
        super(element);
    }*/
    render() {
        return (
            <nav className={classes.nav}>
                <div>
                    <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to="/friends" className={navData => navData.isActive ? classes.active : classes.item}>Friends</NavLink>
                </div>
                <div className={classes.friends} >
                    {this.props.element}
                </div>
            </nav>
        );
    }
}

