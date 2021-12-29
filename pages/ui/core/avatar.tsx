import Head from "next/head"
import { Fragment, ReactElement } from "react"
import styled from "styled-components"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import faker, { fake } from "faker"
import Avatar from "../../../admin/core/Avatar/Avatar"
import AvatarsGroup from "../../../admin/core/Avatar/avatarGroup"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  width: 100%;
  display: flex;
  & div {
    margin-right: 10px;
  }
`

const avatarCode = (code: string) => `
import Avatar, { AvatarsGroup } from "../../../asmaa/core/Avatar/Avatar"
import styled from "styled-components"

const Container = styled.div\`
  width: 100%;
  display: flex;
  & div {
    margin-right: 10px;
  }
\`

function Avatars() {
    return (
        ${code}
    )
}
`

const AvatarAPi = [
  { title: "name", value: "string", default: "none" },
  { title: "src", value: "string", default: "none" },
  { title: "size", value: "string", default: "none" },
  { title: "color", value: "string", default: "white" },
  { title: "onClick", value: "function", default: "none" },
  { title: "backgroundColor", value: "string", default: "orange" },
  { title: "interactive (avatar Group)", value: "boolean", default: "false" },
]

const AvatarPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Avatar</title>
      </Head>
      <ComponentsDocs title="Avatars" renderCode={avatarCode}>
        <Container>
          <Avatar size="md" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="md" name={faker.name.firstName()} color="white" backgroundColor="green" />
          <Avatar size="md" name={faker.name.firstName()} color="white" backgroundColor="blue" />
          <Avatar size="md" name={faker.name.firstName()} color="white" backgroundColor="gray" />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="Avatars Size" renderCode={avatarCode}>
        <Container>
          <Avatar size="sm" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="md" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="xl" name={faker.name.firstName()} src={faker.internet.avatar()} />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="Avatars Group" renderCode={avatarCode}>
        <AvatarsGroup>
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
          <Avatar size="lg" name={faker.name.firstName()} src={faker.internet.avatar()} />
        </AvatarsGroup>
      </ComponentsDocs>
      <ComponentsApi api={AvatarAPi} />
    </Fragment>
  )
}

export default AvatarPage

AvatarPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
