import './Home.css'
import { PostHome } from '../../components/PostHome';



function Home() {

  return (
    <div id='container'>
      <section id='bannerSection'>
        <span>Sandro Jr.</span>
        <div className='banner'></div>
        
      </section>
      <section className='postSection'>
        <nav className='postsMenu'>
          <a className='item-menu' href=""><span>Articles</span></a>
          <a className='item-menu' href=""><span>Profile</span></a>
          <a className='item-menu' href=""><span>Learn</span></a>
          <a className='item-menu' href=""><span>News</span></a>
        </nav>
        <div className='postsContent'>
          <PostHome />
          <PostHome />
          <PostHome />
          <PostHome />
          <PostHome />
          <PostHome />
        </div>
        <div className='postsPag'>
          <a className='item-menu' href=""><span>PAG1</span></a>
          <a className='item-menu' href=""><span>PAG1</span></a>
          <a className='item-menu' href=""><span>PAG1</span></a>
          <a className='item-menu' href=""><span>PAG1</span></a>
        </div>
      </section>
    </div>
  )
}

export default Home;
