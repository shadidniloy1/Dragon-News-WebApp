import { useLoaderData } from "react-router-dom"
import SingleNews from "../components/SingleNews";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
  return (
    <div>
        <h2 className="font-semibold mb-3">Dragon News Home</h2>
        <p className="font-sm text-gray-400">{news.length} found in this category</p>
        <div>
            {
                news.map(singleNews => (
                    <SingleNews key={singleNews._id} news={singleNews}/>
                ))
            }
        </div>
    </div>
  )
}

export default CategoryNews