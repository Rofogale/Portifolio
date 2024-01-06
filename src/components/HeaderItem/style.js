import styled from "styled-components";

export const HeaderItemStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  transition: 0.3s;
  :hover {
    color: var(--preto-primario) !important;
    background-color: var(--verde-primario2);
  }

  .acessibility-icons-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--preto-primario) !important;
    &:hover {
      cursor: pointer;
      color: var(--verde-primario2) !important;
    }
    svg {
      font-size: 24px;
      &:hover {
        color: var(--verde-primario2) !important;
      }
    }
  }

  .label-sidebar {
    user-select: none;
    font-size: "19px";
  }

  .item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
  }

  .item-label {
    margin-top: 1px;
    font-size: 16px;
    font-weight: bold;
  }
`;
