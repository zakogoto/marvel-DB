import abyss from '../../resources/img/abyss.png'
import adam from '../../resources/img/adam.png'
import boomBoom from '../../resources/img/boom-boom.png'
import calipso from '../../resources/img/calipso.png'
import colleenWing from '../../resources/img/colleen-wing.png'
import loki from '../../resources/img/loki.png'
import daimonHellstrom from '../../resources/img/daimon-hellstorm.png'
import damageControl from "../../resources/img/damage-control.png"
import hulk from "../../resources/img/hulk.png"


import './CharList.sass'

export default function CharList() {
    const charData = [
        {name: 'abyss', imgSrc: abyss, alt: 'abyss'},
        {name: 'loki', imgSrc: loki, alt: 'hulk'},
        {name: 'adam', imgSrc: adam, alt: 'adam'},
        {name: 'boom Boom', imgSrc: boomBoom, alt: 'Boom Boom'},
        {name: 'Calypso', imgSrc: calipso, alt: 'calipso'},
        {name: 'colleen Wing', imgSrc: colleenWing, alt: 'colleen Wing'},
        {name: 'Daimon Hellstrom', imgSrc: daimonHellstrom, alt: 'Daimon Hellstrom'},
        {name: 'Damage Control', imgSrc: damageControl, alt: 'damage-Control'},
        {name: 'hulk', imgSrc: hulk, alt: 'hulk'},
    ]

    const cards = charData.map(({name, imgSrc, alt})=> {
        return(
            <div className="char-list__card">
                <div className="char-list__img">
                    <img src={imgSrc} alt={alt} />
                </div>
                <div className="char-list__name">{name.toUpperCase()}</div>
            </div>
        )
    })
    return (
        <section className='char-list'>
            <div className="char-list__wrap">
               {cards}
            </div>
            <button className="btn btn_red btn_long btn_main">LOAD MORE</button>
        </section>
    )
}