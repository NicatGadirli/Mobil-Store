// Components
import Card from "../components/Card"
import Header from "../components/Header"


const Favorites = () => {
    return (
        <>
            <Header />
            <section className="favorites">
                <div className="container">
                    <div className="row">
                        <div className="partOfTheSection">
                            <div className="title">
                                <p>Favorilər</p>
                            </div>
                            <div className="cardBox">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favorites