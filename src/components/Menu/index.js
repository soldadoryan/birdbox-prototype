import React from 'react';
import * as S from './styles';
import Logo from '../../assets/simplelogo.png';
import {
    RiRecordMailLine,
    RiListUnordered,
    RiSettings3Line,
    RiLogoutBoxLine,
    RiCloseLine
} from 'react-icons/ri';

function Menu({ customClass, closeMenu, setPage }) {
    return (
        <S.Container className={customClass}>
            <S.CloseMenu onClick={closeMenu}>
                <RiCloseLine />
            </S.CloseMenu>
            <S.Logo src={Logo} />
            <S.MenuList>
                <S.MenuItem onClick={() => setPage('recording')}>
                    <RiRecordMailLine />
                    <span>Start Recording</span>
                </S.MenuItem>
                <S.MenuItem onClick={() => setPage('listRecording')}>
                    <RiListUnordered />
                    <span>My recordings</span>
                </S.MenuItem>
                <S.MenuItem onClick={() => setPage('404')}>
                    <RiSettings3Line />
                    <span>Settings</span>
                </S.MenuItem>
                <S.MenuItem onClick={() => setPage('login')}>
                    <RiLogoutBoxLine />
                    <span>Log Out</span>
                </S.MenuItem>
            </S.MenuList>
        </S.Container>
    );
}

export default Menu;