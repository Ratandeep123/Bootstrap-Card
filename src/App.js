import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="py-5">Bootstrap card</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top shadow p-3 mb-2 bg-white rounded border border-danger"
                
              />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Submit
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top shadow p-3 mb-2 bg-white rounded border border-warning"
                
              />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Submit
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg"
                className="card-img-top shadow p-3 mb-2 bg-white rounded border border-success"
                
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Submit
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top shadow p-3 mb-2 bg-white rounded border border-primary "
                
              />
              <div className="card-body">
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
