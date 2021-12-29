import React, { ReactElement } from "react"
import styled from "styled-components"
import { Layout } from "../../admin/layouts"
import ReactToString from "react-element-to-jsx-string"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import Button from "../../admin/core/Buttons/Button"
import Input from "../../admin/core/Inputs/BaseInput"
const Container = styled.div`
  width: 100%;

  & .title {
    width: 100%;
    height: 50px;
    background-color: var(--bg-primary);
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
  }

  & .description {
    width: 100%;
    background-color: var(--bg-primary);
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }

  & .im {
    color: dodgerblue;
    background-color: #8080802b;
  }

  & .container {
    height: 50px;
    & .inputStyled__input {
      border-color: green;
      box-shadow: 0 0 1px 1px green;
      background-color: #8080806f;
      color: blue;
    }
  }
`

const CustomizationPage = () => {
  return (
    <Container>
      <div className="title">Customization</div>
      <div className="description">
        it's so easy to customize <span className="im">asmaa</span> template style let's see how{" "}
      </div>
      <div className="description">
        - all the style settings is in style folder , you can change the entire <span className="im">template</span> look just with two config files
        <br />
        <br />- you need to understand that each <span className="im">component</span> have thier<span className="im"> own style</span> but in that
        style we use the settings in the baseTheme.ts in style Folder like colors , background-colors , border-radius , media query, size ....
        <br />
        so if you change for exemple<span className="im"> border-radius</span> or color value you will change it in the
        <span className="im"> entire template</span> which make it so easy for you to change any color you don't like for example
        <br />
        <br />
        for example :
        <br />
        <br />
        <img src="/settings_img.png" alt="" />
        <br />
        <br />
        <br />
        now let's see the component style
        <br />
        <br />
        <img src="/styled-img.png" alt="" />
        <br />
        <br />
        yes just like you see we use <span className="im">Pseudoelements</span>, <span className="im">pseudoselectors</span>, and{" "}
        <span className="im">nesting</span> in<span className="im"> Styled-components</span> wich allow us to keep the style orgnaised and also to
        allow <span className="im">devloppers</span> to use thier<span className="im"> preferred styling tool</span> like{" "}
        <span className="im">scss</span> , <span className="im">css</span> ...
        <br />
        <br />
        let's see how we can do that :
        <br />
        <br />
        for example you want to customize input with scss
        <div>
          <SyntaxHighlighter language="jsx" showLineNumbers style={style}>
            {`
                 // scss file
    
                  .container {
                    height: 50px;
                     .inputStyled__input {
                      border-color: green;
                      box-shadow: 0 0 1px 1px green;
                      background-color: #8080806f;
                      color: blue;
                    }
                  }
           

                //   InputComponent.tsx

                <Input className="container" />

            `}
          </SyntaxHighlighter>
        </div>
        <div>
          before
          <br />
          <br />
          <Input />
          <br />
          after
          <br />
          <br />
          <Input className="container" />
        </div>
        <br />
        <br />
        and that what make it so <span className="im"> powerful</span> this is just an example what you can do is{" "}
        <span className="im">unlimited without changing the core style</span>
      </div>
    </Container>
  )
}

export default CustomizationPage

CustomizationPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
