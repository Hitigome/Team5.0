import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body">
    <div>{header()}</div> 
      <main>
        <div className="container py-3">
          <h4>Your Favorite Artists</h4>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <a href="#" title="Artist" className="thumb">
                  <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" data-toggle="modal" data-target=".modal-profile-lg" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-3">
          <h4>Genre</h4>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-3">
          <h4>Genre</h4>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="images/MF-DOOM-Operation.jpeg" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Artist Name</h5>
                  <p className="card-text">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* Modal */}
        <div className="modal fade modal-profile" tabindex="-1" role="dialog" aria-labelledby="modalProfile" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Artist</h3>
                <button className="close" type="button" data-dismiss="modal">x</button>
              </div>
              <div className="modal-body">
              </div>
              <div className="modal-footer">
                <div className="row w-100">
                  <div className="col">
                    <p>Location</p>
                    <p>Description</p>
                    <h5>Get Tickets</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

function header(){
  return(
    <header>
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Site Titles</h3>
        </div>
        <div className="col-6"></div>
        <div className="col">
          <h3>Profile</h3>
        </div>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-6 mx-auto">
        <h2>Shows in Location</h2>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mx-auto">
        <form className="form">
          <input className="form-control" type="search" placeholder="Search by city" aria-label="Search" />
        </form>
      </div>
    </div>
  </header>
  );
}

export default App;
