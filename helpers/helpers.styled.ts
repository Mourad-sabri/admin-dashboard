import styled from "styled-components"

export const S_Helpers = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid var(--bg-secondary);
  border-radius: ${(p) => p.theme.rounded.sm};
  margin-top: 10px;

  & .helpers__title {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
  }

  & .helpers__header {
    width: 100%;
    height: 40px;
    background-color: var(--bg-secondary);
    border-radius: ${(p) => p.theme.rounded.sm};
    display: flex;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & .helpers__btns {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & .helpers__content {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    overflow-x: auto;
  }

  & .helpers__center {
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
  }

  & .helpers__apiContainer {
    width: 100%;
    min-height: 20px;
  }

  & .helpers__api {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--bg-secondary);
    display: flex;
  }

  & .helpers__apiTitle,
  .helpers__apiValue {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  & .helpers__apiTitle {
    border-right: 1px solid var(--bg-secondary);
  }
`
