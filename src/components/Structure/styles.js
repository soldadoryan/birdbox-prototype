import styled from 'styled-components';

export const IphoneWrap = styled.div`
  width: 380px;
  height: 760px;
  padding: 20px 20px 20px;
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
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-top: 20px;
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
    width: 20px;
    height: 20px;
    display: block;
    border: 1px solid  rgba(255, 255, 255, 0.1);
  }
`;
