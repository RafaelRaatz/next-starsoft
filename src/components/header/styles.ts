'use client'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  border-bottom: 2px solid #393939;

  .header-content {
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 1728px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .header-card {
      display: flex;
      gap: 5px;
      align-items: center;

      .header-button {
        background-color: #232323;
        border: none;
      }

      .header-count-card {
        font-size: 20px;
      }
    }
  }
`
