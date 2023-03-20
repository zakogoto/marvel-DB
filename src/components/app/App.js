import { Component } from "react"

import Header from "../appHeader/AppHeader"
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import ComicsList from "../comicsList/ComicsList"
import Skeleton from "../skeleton/Skeleton"
import CharSidePanel from "../charSidePanel/CharSidePanel"
import AppBanner from "../appBanner/AppBanner"
import ComicsInfo from "../comicsInfo/ComicsInfo"
import CharInfo from "../charInfo/CharInfo"
import Modal from "../modal/Modal"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'char'
    }
  }

  togglePage = (page) => {
    this.setState(({page}))
  }


  render() {
    const appClass = this.state.page === 'char' ? ('bg-decoration') : null
    const updatePage = (page) => {
      switch(page) {
        case 'char':
          return (
            <>
              <RandomChar/>
              <section className="main">
                <CharList/>
                <div>
                  <CharSidePanel/>
                  {/* <Skeleton/> */}
                  <Modal modalType={'validationError'}/>
                </div>
              </section>
            </>
          );
        case 'charInfo':
          return(
            <>
              <AppBanner/>
              <section className="comics">
                <CharInfo/>
              </section>
            </>
          )
        case 'comics':
          return(
            <>
              <AppBanner/>
              <section className="comics">
                <ComicsList/>
              </section>
            </>
          )
        case 'comicsItem':
          return(
            <>
              <AppBanner/>
              <section className="comics">
                <ComicsInfo/>
              </section>
            </>

          )
      }
    }

    return (
      <div className={`app ${appClass}`}>
              <Header typeOfPage={this.state.page} togglePage={this.togglePage}/>
              {updatePage(this.state.page)}
            </div>
    )
  }
}

export default App;
