import { TotalSales } from "../../admin/pages/Dashbords/E-commerce/charts/TotalSales"
import { ReturnedProducts } from "../../admin/pages/Dashbords/E-commerce/charts/ReturnedProducts"
import { ProductsStock } from "../../admin/pages/Dashbords/E-commerce/Lists/ProductsStock"
import { CardsContainer } from "../../admin/pages/Dashbords/E-commerce/StaticsCard/CardsContainer"
import { S_DashboardEcommerce } from "../../admin/pages/Dashbords/E-commerce/ecommerce-styled"
import { RecentPurchases } from "../../admin/pages/Dashbords/E-commerce/Tables/RecentPurchases"
import { VisitorsChart } from "../../admin/pages/Dashbords/E-commerce/charts/VisitorsChart"
import { Fragment, ReactElement } from "react"
import Head from "next/head"
import { Layout } from "../../admin/layouts"
import { VisitorsMap } from "../../admin/pages/Dashbords/E-commerce/maps/visitorsMap"

//  e-commerce dashboard  components  ---------- folder --------   /asmaa/pages/dashboards/Ecommerce

export default function EcommerceDashboard(props: any) {
  return (
    <Fragment>
      {/* head */}
      <Head>
        <title>Ecommerce dashboard</title>
      </Head>
      {/* page content */}
      <S_DashboardEcommerce>
        {/* gretting card with statics card */}
        <CardsContainer />
        {/*  */}
        <div className="dashboard__container">
          <TotalSales />
          <ProductsStock />
        </div>
        <div className="dashboard__container">
          <VisitorsChart />
          <VisitorsMap />
        </div>
        <div className="dashboard__ChartContainer">
          <ReturnedProducts />
        </div>
        <div className="dashboard__container">
          <div className="dashboard__recentPurchases">
            <RecentPurchases />
          </div>
        </div>
        {/* footer */}
        <footer className="dashboard__footer">Asmaa all rights reserved © 2021</footer>
      </S_DashboardEcommerce>
    </Fragment>
  )
}

// export page with layout

EcommerceDashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

EcommerceDashboard.displayName = "Dashboard"
