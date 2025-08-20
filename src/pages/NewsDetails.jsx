import { useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import RightNavbar from "../components/layout-components/RightNavbar"
import NewsDetailsCard from "../components/NewsDetailsCard";


const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    // console.log(news);
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
            <section className="col-span-9">
                <h2 className="font-semibold mb-3">Dragon News</h2>
                <NewsDetailsCard news={news} />
            </section>
            <aside className="col-span-3">
                <RightNavbar />
            </aside>
        </main>
    </div>
  )
}

export default NewsDetails