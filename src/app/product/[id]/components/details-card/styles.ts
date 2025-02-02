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

  .card {
    width: 850px;
    border-radius: 8px;
    background-color: #191a20;

    @media (max-width: 900px) {
      width: 350px;
    }

    .card-content {
      display: flex;
      gap: 25px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;

      .product {
        display: flex;
        gap: 40px;

        @media (max-width: 900px) {
          flex-direction: column;
        }

        .image {
          border-radius: 8px;

          @media (max-width: 900px) {
            width: 320px;
            height: 300px;
          }
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 30px;

          @media (max-width: 900px) {
            align-items: center;
          }

          .card-title {
            font-size: 32px;
          }

          .card-description {
            font-size: 20px;
            color: #cccccc;

            .description-button {
              margin-left: 10px;
              border: none;
              background-color: #ff8310;
              color: #cccccc;
              font-size: 10px;
              padding: 2px;
              border-radius: 2px;
            }
          }

          .card-value {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }

      .card-button {
        width: 100%;
        height: 66px;
        border: none;
        border-radius: 8px;
        color: #ffffff;
        background-color: #ff8310;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  .back-button {
    width: 403px;
    height: 86px;
    background-color: #393939;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 350px;
    }
  }
`;
