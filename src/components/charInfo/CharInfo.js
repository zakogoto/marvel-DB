import './CharInfo.sass'
import loki from '../../resources/img/loki.png'

export default function CharInfo() {
    return(
        <section className='char-info'>
            <img src={loki} alt="X-Men: Days of Future Past" className="char-info__img" />
            <div className="char-info__text-block">
                <h3 className="char-info__name">LOKI</h3>
                <p className="char-info__descr">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is   referred to as the father of Váli in the Prose Edda.
                </p>
            </div>
        </section>
    )
}