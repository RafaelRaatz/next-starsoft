'use client'
import styled from 'styled-components'

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

  .card-image {
    background-color: #191a20;
    border-radius: 8px;
  }

  .cart-card-bio {
    display: flex;
    flex-direction: column;
    gap: 15px;

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
      width: 115px;
      height: 49px;
      border: none;
      border-radius: 8px;
      background-color: #232323;
      color: #ffffff;
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
`
