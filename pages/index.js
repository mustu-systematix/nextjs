import Head from 'next/head'
import Link from 'next/link'
import { API_KEY } from "../public/constants/index"
import News from '../components/news'
export default class Home extends React.Component {
  render() {
    return (
      <News />
    )
  }
}
