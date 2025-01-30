'use client'
import styled from 'styled-components'

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

  overflow-y: auto;

  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin-top: 40px;
    width: 620px;

    .cart-title {
      display: flex;
      width: 550px;
      justify-content: space-between;
      align-items: center;

      .close-button {
        width: 60px;
        height: 60px;
        background-color: #393939;
        border: none;
        border-radius: 100%;

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

      .list-cards {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .cart-card {
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
        }
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
      }
    }
  }
`
