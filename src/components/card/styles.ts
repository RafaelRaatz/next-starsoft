'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 345px;
  height: 555px;
  border-radius: 8px;
  background-color: #191a20;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    gap: 35px;
    flex-direction: column;

    .card-image {
      background-color: #22232c;
      border-radius: 8px;
    }

    .card-info {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .card-title {
        font-size: 18px;
      }

      .card-description {
        font-size: 12px;
        color: #cccccc;
      }

      .card-value {
        display: flex;
        align-items: center;
        gap: 10px;
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
  }
`
