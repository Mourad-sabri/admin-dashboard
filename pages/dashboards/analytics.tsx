import React, { Fragment, ReactElement } from "react"
import { S_AnalyticsPage } from "../../admin/pages/Dashbords/Analytics/analytics.styled"
import { AnalyticsStaticsCard } from "../../admin/pages/Dashbords/Analytics/StaticsCard/AnalyticsStaticsCard"
import Head from "next/head"
import { UsedApps } from "../../admin/pages/Dashbords/Analytics/Charts/UsedApps"
import { ResourceUsage } from "../../admin/pages/Dashbords/Analytics/ProgressCircle/ResourceUsage"
import { TransactionTable } from "../../admin/pages/Dashbords/Analytics/Tables/Transaction"
import { InstalledApps } from "../../admin/pages/Dashbords/Analytics/List/InstalledApps"
import { LoadBalancerComparison } from "../../admin/pages/Dashbords/Analytics/Charts/LoadBalancerComparison"
import { TrafficChart } from "../../admin/pages/Dashbords/Analytics/Charts/TrafficChart"
import { Layout } from "../../admin/layouts"

const Analytics = () => {
  return (
    <Fragment>
      <Head>
        <title> Analytics Dashboard </title>
      </Head>
      <S_AnalyticsPage>
        <AnalyticsStaticsCard />
        <UsedApps />
        <ResourceUsage />
        <div className="dashboard__container">
          <div className="dashboard__table">
            <TransactionTable />
          </div>
          <LoadBalancerComparison />
        </div>
        <div className="dashboard__container">
          <TrafficChart />
          <InstalledApps />
        </div>

        <footer className="dashboard__footer">Asmaa all rights reserved © 2021</footer>
      </S_AnalyticsPage>
    </Fragment>
  )
}

export default Analytics

Analytics.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
