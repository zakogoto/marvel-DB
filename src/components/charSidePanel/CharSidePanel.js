import loki from '../../resources/img/loki.png';

import './CharSidePanel.sass'

export default function CharSidePanel() {
    const comicsData = [
        {name: 'All-Winners Squad: Band of Heroes (2011) #3'},
        {name: 'Amazing Spider-Man (1999) #504'},
        {name: 'Alpha Flight (1983) #50'},
        {name: 'All-Winners Squad: Band of Heroes (2011) #3'},
        {name: 'All-Winners Squad: Band of Heroes (2011) #3'},
        {name: 'Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)'},
        {name: 'All-Winners Squad: Band of Heroes (2011) #3'}
    ]
    const comicsList = comicsData.map(({name})=> {
        return(
            <li className="char-side-panel__comics-item">{name}</li>
        )
    })
    return(
        <section className='char-side-panel'>
            <div className="char-side-panel__wrap">
                <div  className="char-side-panel__img">
                    <img src={loki} alt="loki" />
                </div>
                <div className="char-side-panel__info">
                    <div className="random-char__name">Loki</div>
                    <div className="char-side-panel__btns">
                        <button className='btn btn_red'>HOMEPAGE</button>
                        <button className='btn btn_gray'>WIKI</button>
                    </div>
                </div>
            </div>
            <p className="random-char__descr char-side-panel__descr">
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </p>
            <div className="char-side-panel__comics-title">Comics:</div>
            <ul className="char-side-panel__comics-list">
                {comicsList}
            </ul>
        </section>
    )
}