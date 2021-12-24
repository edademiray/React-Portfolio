import "./blogList.css"
import Blog from "../blog/blog"
import { blogs } from "../../data"

const blogList = () => {
    return (
        <div className="bl">
            <div className="bl-texts">
                <h1 className="bl-title">
                    Create & inspire. its eda
                </h1>
                <p className="bl-desc">
                    working hard, will pay of.
                </p>
            </div>
            <div className="bl-list">
                {blogs.map((item)=>(
                    <Blog key={item.id} img={item.img} link={item.link} />
                ))}

            </div>
        </div>
    );
};

export default blogList;
