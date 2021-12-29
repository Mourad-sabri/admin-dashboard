import React, { ReactElement } from "react"
import styled from "styled-components"
import { Layout } from "../../admin/layouts"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"

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
`

const RenderPages = () => {
  return (
    <Container>
      <div className="title">Build Pages</div>
      <div className="description">there is 2 way to build page</div>
      <div className="description">
        1/ build page without layout
        <br />
        <br />
        example
        <br />
        <br />
        <div>
          <SyntaxHighlighter language="jsx" showLineNumbers style={style}>
            {`
            import Button from "../../asmaa/core/Buttons/Button"
            import Input from "../../asmaa/core/Inputs/BaseInput"
            import styled from "styled-components"
            import { Layout } from "../../asmaa/layouts/Layout/Index"

            const Container = styled.div\`
               .....
            \`

            const LoginPage = ()=> {
                return (
                 <Container>

                  <Input name="email"/>
                  <Input name="password"/>
                  <Button> Login </Button>
                 </Container>

                )
            }

                
            `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="description">
        1/ build page with layout
        <br />
        <br />
        example
        <br />
        <br />
        <div>
          <SyntaxHighlighter language="jsx" showLineNumbers style={style}>
            {`
            import Button from "../../asmaa/core/Buttons/Button"
            import Input from "../../asmaa/core/Inputs/BaseInput"
            import styled from "styled-components"


            const Container = styled.div\`
               .....
            \`

            const DashboardPage = ()=> {
                return (
                 <Container>
                  <div></div> ....
                 </Container>

                )
            }

            //  If you need multiple layouts, you can add a property getLayout to your page,
            // allowing you to return a React component for the layout.
            // This allows you to define the layout on a per-page basis. Since we're returning a function

            
            DashboardPage.getLayout = function getLayout(page) {
              return <Layout> {page} </Layout>
            }

                
            `}
          </SyntaxHighlighter>
        </div>
      </div>
    </Container>
  )
}

export default RenderPages

RenderPages.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
