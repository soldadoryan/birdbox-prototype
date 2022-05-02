import React, { useEffect, useState } from 'react';
import Check from '../Check';
import Header from '../Header';
import * as S from './styles';

function CheckInfo({ setPage }) {
    const [actived, setActived] = useState(false);

    useEffect(() => {
        if (actived) {
            window.setTimeout(() => {
                setPage('recording');
            }, 1000)
        }
    }, [actived]);

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Title onClick={() => setActived(true)}>
                    <Check actived={actived} />
                    <span>
                        I understand that BirdBox is not responsible for disclosing the recordings contained in the application.
                    </span>
                </S.Title>
            </S.Body>
        </S.Container>
    );
}

export default CheckInfo;