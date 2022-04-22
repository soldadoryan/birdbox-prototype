import styled from 'styled-components';

export const IphoneWrap = styled.div`
  width: 350px;
  height: 580px;
  padding: 10px 10px 10px;
  border-radius: 10px;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const IphoneButton = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    display: none;

    &::after {
      display: none;
    }
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    border: 1px solid  rgba(255, 255, 255, 0.1);
  }
`;
