import React, { ReactElement } from "react"
import styled from "styled-components"
import { Layout } from "../../admin/layouts"

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

const StartPage = () => {
  return (
    <Container>
      <div className="title">getting Started</div>
      <div className="description">
        before we start anything let's understand how <span className="im">asmaa</span> work and the structure of the project , first make sure you
        installed the latest version of <span className="im">nodejs</span>
      </div>
      <div className="description">
        asmaa built with :{/*  */}
        <br />
        -- react version : <span className="im">17.0.2</span>
        <br />
        -- nextjs version : <span className="im">11.1.0</span>
        <br />
        -- styled-components version : <span className="im">5.3.0</span>
      </div>
      <div className="description">
        we built <span className="im">70 % of asmaa components</span> from scratch to make it as fast as possible with a few{" "}
        <span className="im">dependencies</span>
      </div>
      {/* <div className="description">
     
        asmaa came with 2 versions <span className="im">javascript</span> & <span className="im">typescript</span> version to allow developers to use
        their preferred language and start quickly
      </div> */}
      <div className="description">
        let's see what each folder contains
        <br />
        <br />
        1/ Download the <span className="im">Asmaa__v1.0.0.zip</span>
        <br />
        <br />
        2/ UnZib <span className="im">Asmaa__v1.0.0.zip</span>
        <br />
        <br />
        3/ after you open the the folder you will find something like that
        <br />
        <br />
        <img src="/asmaa_files.png" alt="" />
        <br />
        <br />
        let's start from the beginning
        <br />
        <br />
        -- <span className="im">asmaa/apps</span> : contains all apps component like add product for ecommerce applications
        <br />
        <br />
        -- <span className="im">asmaa/chars</span> : contains all charts components that used to render chart data in the dashboards and also some
        tools like customTooltip
        <br />
        <br />
        -- <span className="im">asmaa/components</span> : contains some ui components ex: StaticsCard
        <br />
        <br />
        -- <span className="im">asmaa/core</span> :this is the most important folder because it contains all the core components like Button, Table
        ... , all the components built with the reusability in mind
        <br />
        <br />
        -- <span className="im">asmaa/hooks</span> : contains some hooks that we built from scratch or by using some dependencies
        <br />
        <br />
        -- <span className="im">asmaa/layout</span> : this folder export Component that we use to render the page with layout markup
        <br />
        <br />
        -- <span className="im">asmaa/maps</span> : contains geoMap Components
        <br />
        <br />
        -- <span className="im">asmaa/pages</span> : contains all Components and Styles used to build the pages markup
        <br />
        <br />
        -- <span className="im">asmaa/theme</span> : this folder export the THemeModeProvider to toggle between light and dark mode
        <br />
        <br />
        <span className="im">pages</span> : contains all pages
        <br />
        <br />
        <span className="im"> public</span> : contains logos and images
        <br />
        <br />
        <span className="im">styles</span> : contains the style configuration
        <br />
        <br />
        <br />
        !!!!! important note :::::: to make it easier for you and also to make the code clean and easy to maintain we put each{" "}
        <span className="im">component</span> in folder and each one contains 3 or more files the most important files is
        <br />
        <br />
        {`>>> `} <span className="im">Component.tsx</span> -- include the component code
        <br />
        <br />
        {`>>> `} <span className="im">components.types.d.ts</span> -- include the component types
        <br />
        <br />
        {`>>> `} <span className="im">components.styled.ts </span>-- include component styles
        <br />
        <br />
        if you are using vsCode you can find any component source code, styles or types easily just by typing the Components name let's take for
        exemple button :
        <br />
        <br />
        ctrl+E and type <span className="im"> "Button.tsx "</span> for component types <span className="im">"Button.types.d.ts"</span> for component
        styles <span className="im">"Button.styles.ts"</span>
      </div>
    </Container>
  )
}

export default StartPage

StartPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
