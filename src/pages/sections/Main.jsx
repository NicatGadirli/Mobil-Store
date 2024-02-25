import Card from "../../components/Card"

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <div className="selectionsBox">
                        <div className="selected">
                            <p>Iphone</p>
                        </div>
                        <div className="selected">
                            <p>Iphone</p>
                        </div>
                        <div className="selected">
                            <p>Iphone</p>
                        </div>
                        <div className="selected">
                            <p>Iphone</p>
                        </div>
                        <div className="selected">
                            <p>Iphone</p>
                        </div>
                        <div className="selected">
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className="partOfTheSection">
                        <div className="title">
                            <p>Premium</p>
                        </div>
                        <div className="cardBox">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                    <div className="partOfTheSection">
                        <div className="title">
                            <p>Ən  çox satılan</p>
                        </div>
                        <div className="cardBox">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                    <div className="partOfTheSection">
                        <div className="title">
                            <p>Təklif edilən</p>
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
    )
}

export default Main