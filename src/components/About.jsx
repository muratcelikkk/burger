import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>
        </div>
        <div className='aboutBottom'>
            <h1>Hakkımızda</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur perferendis, nam consequuntur fuga optio molestias quam consequatur, recusandae earum vero. Aut sapiente porro ex alias rem earum adipisci modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur perferendis, nam consequuntur fuga optio molestias quam consequatur, recusandae earum vero. Aut sapiente porro ex alias rem earum adipisci modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur perferendis, nam consequuntur fuga optio molestias quam consequatur, recusandae earum vero. Aut sapiente porro ex alias rem earum adipisci modi!</p>
        </div>
    </div>
  )
}

export default About