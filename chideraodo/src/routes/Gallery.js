import { Navbar, Footer } from '../components';
import {  Galleryin } from '../container';

const Gallery = () => {
  return (
    <div>
        <div className="gallery">
          <Navbar />
          <Galleryin />
          <Footer />
        </div>
    </div>
  )
}

export default Gallery