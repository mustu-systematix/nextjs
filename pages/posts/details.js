import Link from 'next/link'
import moment from "moment"

export default class FirstPost extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      id: "",
      details: {}
    }
  }

  static getInitialProps({ query }) {
    console.log('query: ', query);
    return { query }
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = this.props.query.id;
    let country = this.props.query.source;
    // console.log('id: ', id);
    this.setState({
      id
    }, () => {
      const url = 'http://newsapi.org/v2/top-headlines?' +
        `country=${country}&` +
        'apiKey=8228aa37821544f8978abacb2d09207c'
      var req = new Request(url);
      fetch(req)
        .then((response) => {
          return response.json();
        }).then(res => {
          this.setState({
            news: res.articles
          }, () => {
            this.setState({
              details: this.state.news[id]
            })
          })
        })
    })
  }

  render() {
    const news = this.state.details;
    console.log(news);
    return (
      <div>
        <div className="header-details"><Link href="/">👈Back</Link>
          <div className="link"><a target="_blank" href={news.url}>Go to source</a></div></div>
        <main class="container">
          <div class="left-column">
            <img data-image="red" class="active" src={news.urlToImage} alt="" />
          </div>


          {/* <!-- Right Column --> */}
          <div class="right-column">

            {/* <!-- Product Description --> */}
            <div class="product-description">
              <span>News</span>
              <h1>{news.author}</h1>
              <p>{news.description}</p>
              <p>{news.content}</p>
            </div>



            {/* <!-- Product Pricing --> */}
            <div class="product-price">
              Source: <strong>{news.source && news.source.name ? news.source.name : ""}</strong>
              <br/>
              Published At: {moment(news.publishedAt).format("DD MMM YYYY")}
            </div>
          </div>
        </main>
      </div>
    )
  }
}