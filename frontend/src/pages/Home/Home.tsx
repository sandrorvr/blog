import './Home.css'
import { PostHome } from '../../components/PostHome';

function Home() {

  return (
    <div id='container'>
      <section className='bannerSection'>
        <span>Sandro Jr.</span>
      </section>
      <section className='postSection'>
        <div className='postsContent'>
          <PostHome />
          <PostHome />
          <PostHome />
        </div>
      </section>
    </div>
  )
}

export default Home;
