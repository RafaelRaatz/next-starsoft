'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 619px;
  height: 200px;
  padding: 10px;
  background-color: #393939;
  border-radius: 8px;
  gap: 30px;

  @media (max-width: 680px) {
    width: 350px;
    height: 400px;
    flex-direction: column;
    gap: 10px;
  }

  .card-image {
    background-color: #191a20;
    border-radius: 8px;
  }

  .cart-card-bio {
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 680px) {
      gap: 20px;
    }

    .cart-card-info {
      @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 280px;
      }
    }

    .card-description {
      font-size: 12px;
      color: #cccccc;
    }
    .card-price {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .cart-card-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .quantity-button {
      width: 40px;
      border: none;
      border-radius: 8px;
      background-color: #232323;
      color: #ffffff;
    }

    .decrease-increase {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 115px;
      height: 49px;
      background-color: #232323;
      border-radius: 8px;
    }

    .trash-button {
      width: 43px;
      height: 43px;
      border: none;
      border-radius: 100%;
      background-color: #ff8310;
      color: #ffff;
    }
  }
`;
