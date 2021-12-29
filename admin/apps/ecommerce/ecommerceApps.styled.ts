import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"

export const S_TableHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  & .input {
    width: 300px;
  }
  & button {
    margin-right: 5px;
  }

  & .selectedRows {
    padding-left: 5px;
    width: 110px;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
  }

  & .btns {
    width: calc(100% - 110px);
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
  }
`

export const S_ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 50px;
  display: flex;
  flex-shrink: 0px;

  & .imgContainer {
    width: 50px;
    height: 100%;
    padding: 2px;
  }

  & .img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  & .content {
    width: calc(100% - 50px);
    height: 100%;
  }

  & .product-title {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 2px;
    text-decoration: underline;
  }

  & .product-dep {
    width: 100%;
    height: 20px;
  }
`

export const S_AddProducts = styled.div`
  width: 100%;
  height: 100%;

  & .form {
    width: 100%;
    height: 100%;
  }

  & .addProduct__info {
    width: 100%;
    min-height: 10px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin: auto;
    margin-top: 7px;

    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 70%;
    }
  }

  & .addProduct__price-inputs {
    width: 100%;
  }

  & .addProduct__title {
    font-weight: bold;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }
  & .addProduct__checkBox {
    margin-top: 8px;
  }

  & .addProduct__btn {
    width: 70%;
    min-height: 10px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin: auto;
    margin-top: 7px;
  }

  & .addProduct__arrayInputs {
    width: 100%;
    min-height: 30px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--text-color);
    padding: 7px;
    border-radius: ${(p) => p.theme.rounded.sm};
    margin-top: 10px;
    position: relative;
  }

  & .array-input {
    width: 200px;
    margin-right: 5px;
  }

  & .add-btn-container {
    display: flex;
    align-items: flex-end;
  }

  & .add-variant-btn {
    margin-top: 10px;
  }

  & .variant-index {
    position: absolute;
    top: -10px;
    background-color: var(--bg-primary);
    padding: 0 3px;
  }
`

S_TableHeader.displayName = "TableHeaderStyled"

S_ProductContainer.displayName = "ProductsTableStyled"

S_AddProducts.displayName = "AddProductStyled"
