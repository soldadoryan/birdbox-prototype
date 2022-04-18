import React from 'react';
import * as S from './styles';
import Logo from '../../assets/simplelogo.png';
import { RiMenuFill } from 'react-icons/ri';

function Header() {
    return (
        <S.Header>
            <S.Logo src={Logo} />
            <S.MenuButton>
                <RiMenuFill />
            </S.MenuButton>
        </S.Header>
    );
}

export default Header;