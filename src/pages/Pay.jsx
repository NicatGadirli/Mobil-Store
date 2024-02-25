//Component
import Header2 from "../components/Header2"

const Pay = () => {
    return (
        <>
            <Header2 />
            <section className="pay">
                <div className="container">
                    <div className="title">
                        <h3>Sifarişi rəsmiləşdir</h3>
                    </div>
                    <div className="row">
                        <form>
                            <div className="inputBox">
                                <label >Ad soyad</label> <br />
                                <input type="text" required />
                            </div>
                            <div className="contactBox">
                                <div className="element">
                                    <label>Telefon nömrəsi</label> <br />
                                    <input type="text" required />
                                </div>
                                <div className="element">
                                    <label>Email</label> <br />
                                    <input type="email" required />
                                </div>
                            </div>
                            <div className="inputBox">
                                <label>Şəhər</label> <br />
                                <select>
                                    <option>Bakı</option>
                                    <option>Gəncə</option>
                                    <option>Naxçıvan</option>
                                    <option>Sumqayıt</option>
                                    <option>Lənkəran</option>
                                    <option>Mingəçevir</option>
                                    <option>Naftalan</option>
                                    <option>Şəki</option>
                                    <option>Şirvan</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label>Rayon</label><br />
                                <select>
                                    <option>Ağdam</option>
                                    <option>Ağdaş</option>
                                    <option>Ağcabədi</option>
                                    <option>Ağstafa</option>
                                    <option>Ağsu</option>
                                    <option>Astara</option>
                                    <option>Babək</option>
                                    <option>Balakən</option>
                                    <option>Bərdə</option>
                                    <option>Beyləqan</option>
                                    <option>Biləsuvar</option>
                                    <option>Cəbrayıl</option>
                                    <option>Cəlilabad</option>
                                    <option>Culfa</option>
                                    <option>Daşkəsən</option>
                                    <option>Füzuli</option>
                                    <option>Gədəbəy</option>
                                    <option>Goranboy</option>
                                    <option>Göyçay</option>
                                    <option>Göygöl</option>
                                    <option>Hacıqabul</option>
                                    <option>Xaçmaz</option>
                                    <option>Xızı</option>
                                    <option>İmişli</option>
                                    <option>İsmayıllı</option>
                                    <option>Kürdəmir</option>
                                    <option>Qəbələ</option>
                                    <option>Qax</option>
                                    <option>Qazax</option>
                                    <option>Qobustan</option>
                                    <option>Quba</option>
                                    <option>Qusar</option>
                                    <option>Lerik</option>
                                    <option>Masallı</option>
                                    <option>Neftçala</option>
                                    <option>Oğuz</option>
                                    <option>Ordubad</option>
                                    <option>Saatlı</option>
                                    <option>Sabirabad</option>
                                    <option>Salyan</option>
                                    <option>Samux</option>
                                    <option>Şabran</option>
                                    <option>Şəki</option>
                                    <option>Şamaxı</option>
                                    <option>Şəmkir</option>
                                    <option>Şərur</option>
                                    <option>Siyəzən</option>
                                    <option>Tovuz</option>
                                    <option>Ucar</option>
                                    <option>Yardımlı</option>
                                    <option>Yevlax</option>
                                    <option>Zaqatala</option>
                                    <option>Zərdab</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label>Ünvan (metro daxil)</label><br />
                                <select id="station">
                                    <option>20 Yanvar</option>
                                    <option>28 May</option>
                                    <option>8 Noyabr</option>
                                    <option>Azadlıq prospekti</option>
                                    <option>Avtovağzal</option>
                                    <option>Bakmil</option>
                                    <option>Cəfər Cabbarlı</option>
                                    <option>Dərnəgül</option>
                                    <option>Elmlər Akademiyası</option>
                                    <option>Əhmədli</option>
                                    <option>Gənclik</option>
                                    <option>Həzi Aslanov</option>
                                    <option>Xalqlar dostluğu</option>
                                    <option>İçərişəhər</option>
                                    <option>İnşaatçılar</option>
                                    <option>Koroğlu</option>
                                    <option>Qara Qarayev</option>
                                    <option>Memar Əcəmi (Yaşıl)</option>
                                    <option>Memar Əcəmi (Bənövşəyi)</option>
                                    <option>Nəsimi</option>
                                    <option>Nərimanov</option>
                                    <option>Neftçilər</option>
                                    <option>Nizami</option>
                                    <option>Sahil</option>
                                    <option>Xətai</option>
                                    <option>Xocəsən</option>
                                    <option>Ulduz</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label>Əlavə məlumat</label> <br />
                                <textarea cols="54" rows="5" required></textarea>
                            </div>
                            <div className="contactBox2">
                                <input type="checkbox" required/>
                                <label>Mən Qaydalar və Şərtləri oxudum və qəbul edirəm</label>
                            </div>
                            <div className="btn">
                                <button>Sifariş Verin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pay

