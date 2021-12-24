import "./about.css"
import Award from "../../img/award.png"

const about = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-dub">

                </p>
                <p className="a-desc">
                    Ben Eda, 23 yaşındayım ve Matematik - Bilgisayar Bilimleri 3. sınıf öğrencisiyim. Daha çok veri bilimi alanında ilerlemek istiyorum ve bunun için şuan aktif olarak python eğitimlerinde yer alıyorum. Geçen sene bir etkinlik sayesinde tanıştığım flutter ise gerçekten ilgimi çeken ve öğrenmeye çalıştığım bir teknoloji. Aynı zamanda sosyal medyada içerik üretimi ile de ilgileniyorum. Daha önce bir çok okul kulübünde  aktif olarak yer almakla birlikte, bağımsız içerik platformu olan specter medya'da daha önce sosyal medya yöneticisi olarak yer alırken şuanda web developer olarak , wordpress altyapısını kullanmaktayım. Teknolojinin her alanında yer almak benim için vazgeçilmez bir hobi diyebilirim.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                  <div className="a-award-texts">
                  <h4 className="a-award-title"> Front End Developer</h4>
                    <div className="a-award-desc">
                        Enstitü İstanbul İsmek, Kodluyoruz, Micrasoft  tarafından çevrim içi olarak düzenlenen Front End Developer eğitim programını başarıyla tamamlamıştır.
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default about
