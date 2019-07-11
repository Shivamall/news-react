import React, { Component } from 'react';
import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './pages/Footer'
import axios from "axios";
import './App.css';
let api_key= ""

class App extends Component {
  state = {
    Bottom: false,
    firstTab: 's',
    currentPage: 1,
    loading: false
  }



  changeTab = async (event, newTab) => {
    await this.setState({
      firstTab: newTab,
      currentPage: 1,
      articles: []
    })

    await this.fetchNews()
  }

  Query = (event) => {
    this.setState({
      q: event.target.value
    })
  }

  fetchNews = async () => {
    const url = this.fetchUrl()
    if (this.state.firstTab === 's' && !this.state.q) {
      this.setState({ 
        currentPage: 1,
        articles: []
      })
      return
    }

    this.setState({ loading: true })
    const articles = this.state.articles || []

    try {
      let res = await axios.get(url);
      let json = res.data;
      if (json && json.status === "ok") {
        this.setState({ articles: [...articles, ...json.articles] })
      }
    } catch (e) {
      console.log(`e: ${e}`)
    } finally {
      this.setState({ loading: false })
    }
  }

  fetchUrl = () => {
   
    const countryUrl = `https://newsapi.org/v2/top-headlines?country=${this.state.firstTab}`
    const searchUrl = `https://newsapi.org/v2/everything?q=${this.state.q}`
    const url = this.state.firstTab === 's' ? searchUrl : countryUrl
    return `${url}&sortBy=publishedAt&pageSize=10&page=${this.state.currentPage}&apiKey=${api_key}`
  }




  constructor() {
    super()
    window.addEventListener('scroll', (event) => {
      const reachBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 25)

      if (reachBottom) {
        if (!this.state.reachBottom) {
          this.onScroll(event)
          this.setState({ reachBottom: true })
        }
      } else {
        if (this.state.reachBottom) {
          this.setState({ reachBottom: false })
        }
      }

    })
    
  }
  onScroll = async (event) => {
    this.setState({ currentPage: this.state.currentPage + 1 })
    await this.fetchNews()
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <Header firstTab={this.state.firstTab} changeTab={this.changeTab} submitSearch={this.submitSearch} Query={this.Query} />
        </header>
        <main className="App-Main">
          <Main firstTab={this.state.firstTab} articles={this.state.articles} loading={this.state.loading} />
        </main>
        <footer className="App-Footer">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
