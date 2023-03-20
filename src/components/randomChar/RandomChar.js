import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices';

import './RandomChar.sass'

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
        name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null
    }
    
    MarvelService = new MarvelServices();

    updateChar = () => {

        let id = 1009548;

        this.MarvelService
        .getCharacter(id)
        .then(res => {
            this.setState({
                name: res.data.results[0].name,
                description: res.data.results[0].description,
                thumbnail: res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension,
                homepage: res.data.results[0].urls[2].url,
                wiki: res.data.results[0].urls[1].url
            })
        })
    }


    render() {
        let {name, description, thumbnail, homepage, wiki} = this.state;
        return(
            <section className='random-char'>
                <div className="random-char__about">
                    <div  className="random-char__img">
                        <img src={thumbnail} alt={name} />
                    </div>
                    <div className="random-char__info">
                        <div className="random-char__name">{name}</div>
                        <p className="random-char__descr">
                            {description}
                        </p>
                        <div className="random-char__btns">
                            <a href={homepage} className='btn btn_red' target='_blank'>HOMEPAGE</a>
                            <a href={wiki} className='btn btn_gray' target='_blank'>WIKI</a>
                        </div>
                    </div>
                </div>
                <div className="random-char__new">
                    <p className="random-char__text">
                        Random character for today!
                        Do you want to get to know him better?
                        <br /> <br />
                        Or choose another one
                    </p>
                    <button className='btn btn_red btn_dark-bg'>TRY IT</button>
                </div>
            </section>
        )
    }
}

export default RandomChar;