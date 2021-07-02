import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styless/Components/Home.css';
import MenuDesktop from './Nav/MenuDesktop';
import MenuMobile from './Nav/MenuMobile';

function Home() {
  return (
    <div className="App container-fluid">
      <section className="row d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 px-0">
            <img className="img-fluid w-100" loading="lazy" src="/assets/Holding-Phone.png" alt="Holding-phone"/>
        </div>
        <div className="col-12 col-md-6 mt-4">
            <div className="row menu__after px-5">
                <div className="col-6 px-0">
                    <img className="img-fluid d-block d-md-none" loading="lazy" src="/assets/ggg.svg" alt="Logo Lagom"/>
                    <img className="img-fluid d-none d-md-block" loading="lazy" src="/assets/lagom.svg" alt="Logo Lagom"/>
                </div>
            </div>
            <div className="menu__hamburger">
              <div className="d-none d-md-flex">
                  <MenuDesktop />
              </div>
              <div className="d-flex d-md-none">
                  <MenuMobile />
              </div>
            </div>
    
            <div className="row h-75 px-md-5 text-center text-md-start d-flex align-items-center justify-content-center">
                <h1 className="home__h1 w-75">Digital products lovingly made with a human touch.</h1>
            </div>
        </div>
      </section>
      <section className="row align-items-center">
        <div className="col-12 col-md-6">
          <div className="row my-5 mx-3 menu__after">
            <div className="col-6">
              <h2 className="dribble__h2">Dribbble</h2>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a href="https://www.lagggom.com/">
                <img className="img-fluid" loading="lazy" src="/assets/arrow-top.svg" alt="Dribble"/>
              </a>
            </div>
          </div>
          <div className="row my-5 mx-3">
            <div className="col-6">
              <h2 className="twitter__h2">Twitter</h2>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a href="https://www.lagggom.com/">
                <img className="img-fluid" loading="lazy" src="/assets/arrow-grey-top.png" alt="Twitter"/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 px-0">
          <div className="row px-0 mx-0">
            <div className="col-12 col-md-6 px-0 mx-0">
              <img className="img-fluid w-100" loading="lazy" src="/assets/Frame 2.png" alt="Lagom"/>
            </div>
            <div className="col-12 col-md-6 px-0 mx-0">
              <img className="img-fluid w-100 h-100" loading="lazy" src="/assets/Lagggom.png" alt="Lagom"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;