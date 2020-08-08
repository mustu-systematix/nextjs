import Head from 'next/head'
import Link from 'next/link'
// import  "./layout.css"

export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            country: [{
                name: "Argentina",
                value: "ar"
            }
                , {
                name: "Australia",
                value: "au"
            }
                , {
                name: "Austria",
                value: "at"
            }
                , {
                name: "Belgium",
                value: "be"
            }
                , {
                name: "Brazil",
                value: "br"
            }
                , {
                name: "Bulgaria",
                value: "bg"
            }
                , {
                name: "Canada",
                value: "ca"
            }
                , {
                name: "China",
                value: "cn"
            }
                , {
                name: "Colombia",
                value: "co"
            }
                , {
                name: "Cuba",
                value: "cu"
            }
                , {
                name: "Czech Republic",
                value: "cz"
            }
                , {
                name: "Egypt",
                value: "eg"
            }
                , {
                name: "France",
                value: "fr"
            }
                , {
                name: "Germany",
                value: "de"
            }
                , {
                name: "Greece",
                value: "gr"
            }
                , {
                name: "Hong Kong",
                value: "hk"
            }
                , {
                name: "Hungary",
                value: "hu"
            }
                , {
                name: "India",
                value: "in"
            }
                , {
                name: "Indonesia",
                value: "id"
            }
                , {
                name: "Ireland",
                value: "ie"
            }
                , {
                name: "Israel",
                value: "il"
            }
                , {
                name: "Italy",
                value: "it"
            }
                , {
                name: "Japan",
                value: "jp"
            }
                , {
                name: "Latvia",
                value: "lv"
            }
                , {
                name: "Lithuania",
                value: "lt"
            }
                , {
                name: "Malaysia",
                value: "my"
            }
                , {
                name: "Mexico",
                value: "mx"
            }
                , {
                name: "Morocco",
                value: "ma"
            }
                , {
                name: "Netherlands",
                value: "nl"
            }
                , {
                name: "New Zealand",
                value: "nz"
            }
                , {
                name: "Nigeria",
                value: "ng"
            }
                , {
                name: "Norway",
                value: "no"
            }
                , {
                name: "Philippines",
                value: "ph"
            }
                , {
                name: "Poland",
                value: "pl"
            }
                , {
                name: "Portugal",
                value: "pt"
            }
                , {
                name: "Romania",
                value: "ro"
            }
                , {
                name: "Russia",
                value: "ru"
            }
                , {
                name: "Saudi Arabia",
                value: "sa"
            }
                , {
                name: "Serbia",
                value: "rs"
            }
                , {
                name: "Singapore",
                value: "sg"
            }
                , {
                name: "Slovakia",
                value: "sk"
            }
                , {
                name: "Slovenia",
                value: "si"
            }
                , {
                name: "South Africa",
                value: "za"
            }
                , {
                name: "South Korea",
                value: "kr"
            }
                , {
                name: "Sweden",
                value: "se"
            }
                , {
                name: "Switzerland",
                value: "ch"
            }
                , {
                name: "Taiwan",
                value: "tw"
            }
                , {
                name: "Thailand",
                value: "th"
            }
                , {
                name: "Turkey",
                value: "tr"
            }
                , {
                name: "UAE",
                value: "ae"
            }
                , {
                name: "Ukraine",
                value: "ua"
            }
                , {
                name: "United Kingdom",
                value: "gb"
            }
                , {
                name: "United States",
                value: "us"
            },
            {
                name: "Venuzuela",
                value: "ve"
            }
            ],
            selectedCountry: "in",
            countryName: "India"
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const url = 'http://newsapi.org/v2/top-headlines?' +
            `country=${this.state.selectedCountry}&` +
            'apiKey=8228aa37821544f8978abacb2d09207c'
        var req = new Request(url);
        fetch(req)
            .then((response) => {
                return response.json();
            }).then(res => {
                this.setState({
                    news: res.articles
                })
            })
    }

    changeCountry = (e) => {
        const value = e.target.value
        this.state.country.map(el => {
            if (el.value == value) {
                this.setState({
                    countryName: el.name
                })
            }
        })
        this.setState({
            selectedCountry: value
        }, () => {
            this.getData()
        })
    }

    render() {
        return (
            <main>
                <div className="link"><select name="country" id="country" onChange={this.changeCountry}>
                    {this.state.country.map(el => {
                        return <option key={el.value} value={el.value} selected = {this.state.selectedCountry == el.value}>{el.name}</option>
                    })}
                </select>
                </div>
                <h1>{this.state.countryName} News</h1>
                <ol className="gradient-list" >
                    {this.state.news.map((news, i) => {
                        return (
                            <li>
                                <Link key={i} href={`/posts/details?id=${i}&source=${this.state.selectedCountry}`}>{news.title}</Link>
                            </li>
                        )
                    })
                    }
                </ol>
            </main>
        )
    }
}
