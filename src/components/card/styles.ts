'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 345px;
  height: 555px;
  border-radius: 8px;
  background-color: #191a20;

  .card {
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .product {
      display: flex;
      flex-direction: column;
      gap: 35px;

      .image {
        border-radius: 8px;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .card-title {
          font-size: 18px;
        }

        .card-description {
          font-size: 12px;
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
      width: 296px;
      height: 66px;
      border: none;
      border-radius: 8px;
      color: #ffffff;
      background-color: #ff8310;
      font-weight: bold;
      font-size: 16px;
    }
  }
`
