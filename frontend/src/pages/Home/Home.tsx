import './Home.css'
import { useContext } from 'react';
import { PostHome } from '../../components/PostHome';
import { IconSocial } from '../../components/Icons';
import { ContextHome } from './Context';




function Home() {
  const ctx = useContext(ContextHome);
  
  return (
    
    <div id='container'>
      <section id='bannerSection'>
        <div className='banner'>
          <span className='text-banner'>Sandro Jr.</span>
        </div>
        <nav id='contact'>
          <a className='text-banner item-menu' href=""><span><IconSocial name='@'/></span></a>
          <a className='text-banner item-menu' href=""><span><IconSocial name='git'/></span></a>
          <a className='text-banner item-menu' href=""><span><IconSocial name='in'/></span></a>
        </nav>
      </section>
      <section className='postSection'>
        <nav className='postsMenu'>
          <a className='item-menu' href=""><span>Articles</span></a>
          <a className='item-menu' href=""><span>Profile</span></a>
          <a className='item-menu' href=""><span>Learn</span></a>
          <a className='item-menu' href=""><span>News</span></a>
        </nav>
        <div className='postsContent'>
          {
            ctx?.posts.map((post)=> <PostHome key={post.id} title={post.title} body={post.body}/>)
          }
          
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
