import React from 'react';
import * as S from './styles';
import Logo from '../../assets/logo.png';

function Register({ setPage }) {
    return (
        <S.Container>
            <S.Logo src={Logo} />
            <S.Title>Create Account</S.Title>
            <S.Input placeholder='Full name' />
            <S.Input placeholder='E-mail' />
            <S.Input placeholder='Id number' />
            <S.Input placeholder='Phone number' />
            <S.Input placeholder='Password' />
            <S.Button onClick={() => setPage('checkinfo')}>Sign Up</S.Button>
            <S.LinkRegister onClick={() => setPage('login')}>Already have an account? Sign In.</S.LinkRegister>
        </S.Container>
    );
}

export default Register;