import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../../assets/simplelogo.png';
import { RiMenuFill } from 'react-icons/ri';
import Menu from '../Menu';

function Header({ setPage }) {
    const [actionMenu, setActionMenu] = useState('');

    return (
        <>
            <S.Header>
                <S.Logo src={Logo} />
                <S.MenuButton onClick={() => setActionMenu('enterMenu')}>
                    <RiMenuFill />
                </S.MenuButton>
            </S.Header>
            <Menu customClass={actionMenu} closeMenu={() => setActionMenu('exitMenu')} setPage={setPage} />
        </>
    );
}

export default Header;