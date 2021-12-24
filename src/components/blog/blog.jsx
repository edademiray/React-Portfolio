import "./blog.css"

const blog = ({img, link}) => {
    return (
        <div className="b" >
            <div className="b-browser">
                <div className="b-circle"></div>
                <div className="b-circle"></div>
                <div className="b-circle"></div>
            </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="b-img" />
            <img src={img} alt="" className="b-img" />
        </a>
        </div>
    );
};

export default blog
