import React from 'react';
import styles from './Header.module.css'


export default class Header extends React.Component<{}>{

    render() {
        return (
            <header className={styles.header }>
            <img src = 'https://freepngclipart.com/download/logo/80530-network-discord-icons-computer-graphics-logo-emoji.png' />
                </header>
            )
    }
}