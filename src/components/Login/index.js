import React from 'react';
import * as S from './styles';
import Logo from '../../assets/logo.png';

function Login({ setPage }) {
    return (
        <S.Container>
            <S.Logo src={Logo} />
            <S.Input placeholder='E-mail' />
            <S.Input placeholder='Password' />
            <S.Button onClick={() => setPage('recording')}>Sign In</S.Button>
            <S.LinkRegister>Create account</S.LinkRegister>
        </S.Container>
    );
}

export default Login;