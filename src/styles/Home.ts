'use client';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  .list-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1455px;
    margin: auto;
  }

  .load-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 1455px;
    margin: auto;
    align-items: center;

    .load-button {
      width: 403px;
      height: 86px;
      background-color: #393939;
      border: none;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;
