import styled from "styled-components"

export const S_TextEditor = styled.div`
  border: 1px solid var(--bg-secondary);
  border-radius: ${(p) => p.theme.rounded.sm};

  & .editorStyled-wrapper {
    background-color: var(--bg-primary);
  }

  & .editorStyled__editor {
    height: 250px;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 11px;
    }
  }
  & .editorStyled__toolbar {
    background-color: var(--bg-secondary);
    border: none;
  }

  & .editorStyled__btn {
    border-radius: ${(p) => p.theme.rounded.sm};
    width: 30px;
    height: 30px;
    background-color: var(--bg-primary);
  }

  & .editorStyled__select {
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: var(--bg-primary);
    & :hover {
      background-color: var(--bg-primary);
    }
  }

  & .editorStyled__options {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    background-color: var(--bg-primary);
    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 11px;
    }

    :hover {
      background-color: var(--bg-primary);
    }
  }

  & .editorStyled__linkPopup {
    background-color: var(--bg-primary);
    color: var(--text-color);
  }
  & .editorStyled__colorPopup {
    background-color: var(--bg-primary);
    color: var(--text-color);
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 11px;
    }
  }
`

S_TextEditor.displayName = "TextEditorStyled"
