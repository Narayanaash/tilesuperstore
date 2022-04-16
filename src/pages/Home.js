import Layout from "../components/Layout";
import Hero from "../components/Hero";
import OffersHeadlines from "../components/OffersHeadlines"
import Banners from "../components/Banners";
import Deals from "../components/Deals";
import Collections from "../components/Collections";

export default function Home() {
  return (
    <Layout>
        <Hero />
        <OffersHeadlines />
        <Deals />
        <Collections />
        <Banners />
    </Layout>
  )
}
