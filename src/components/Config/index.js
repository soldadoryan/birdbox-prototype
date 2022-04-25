import React from 'react';
import Header from '../Header';
import * as S from './styles';

function Config({ setPage }) {
    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Form>
                    <S.Title>
                        Write a sentence that, when pronounced, will trigger the recorder:
                    </S.Title>
                    <S.Input placeholder='Example: Good Morning' />
                    <S.Button type="submit">
                        Save
                    </S.Button>
                </S.Form>
            </S.Body>
        </S.Container>
    );
}

export default Config;