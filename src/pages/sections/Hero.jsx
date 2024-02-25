import { ReactComponent as Filter } from "../../assets/images/svg/filter.svg";
import { ReactComponent as Search } from "../../assets/images/svg/01 align center.svg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="afterHeader">
                    <div className="searchArea">
                        <div className="inputBox">
                            <input type="text" placeholder="Search" />
                            <Search className="search" />
                        </div>
                        <div className="filterIcon">
                            <Filter className="filter" />
                        </div>
                    </div>
                    <div className="createDesign">
                        <Link to="/">Dizayn yarat</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero