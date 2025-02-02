'use client';
import styled from 'styled-components';

export const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 679px;
  height: 100vh;
  background: #232323;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 1);
  padding: 16px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease-in-out;

  @media (max-width: 680px) {
    width: 375px;
  }

  overflow-y: auto;

  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin-top: 40px;
    width: 620px;

    @media (max-width: 680px) {
      width: 375px;
      gap: 50px;
    }

    .cart-title {
      display: flex;
      width: 550px;
      gap: 100px;
      align-items: center;

      @media (max-width: 680px) {
        width: 350px;
        gap: 20px;
      }

      .close-button {
        width: 60px;
        height: 60px;
        background-color: #393939;
        border: none;
        border-radius: 100%;

        @media (max-width: 680px) {
          width: 50px;
          height: 50px;
        }

        .close-icon {
          width: 30px;
          height: 30px;
          color: #ff8310;
        }
      }
    }

    .cart-infos {
      display: flex;
      flex-direction: column;
      gap: 50px;

      @media (max-width: 680px) {
        width: 350px;
      }

      .list-cards {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .cart-value {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .cart-total-price {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }

      .cart-button {
        height: 81px;
        border: none;
        border-radius: 8px;
        background-color: #ff8310;
        color: #fff;
        font-size: 22px;

        @media (max-width: 680px) {
          width: 350px;
          height: 50px;
        }
      }
    }
  }
`;
