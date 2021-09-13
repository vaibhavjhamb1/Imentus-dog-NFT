import './App.css';

function App() {
  return (
    <div className="container-fluid main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/bg.png'})` }}>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"> <img src="assets/logo.png" width="100" height="100" /><span><p className="fontstyle">Rare Scooby</p></span>  </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse fontstyle navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#attributes">Attributes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Roadmap</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Home Section */}
      <div className="container fontstyle mt-3 mb-3 pb-5">
        <div className="row">
          <div className="col rare-dogs">
            <div className="">
              <img src="assets/DJ12.png" className="rare-dog-border" width="236" height="216" /><br />
              <h2 className="fw-bold" >Rare Dogs</h2><br />
              <h6>The newest citizen of Rarescooby</h6>
              <p>10,000 algorithmically generated, right-facing cute cats on the Solana blockchain. By owning a SolCat, you become a Soltopian. You enter into a community of SolCats and SolBears, getting you access to special privileges, such as hidden Discord channels and earlier drop times.</p>
            </div>
            <br />

          </div>
          <div className="col d-flex justify-content-end" >
            <span className=" curve bg-dark">
              <img src="assets/DJ12.png" width="385" height="399" />
              <br/>
              <span className="d-grid gap-2  col-6 mx-auto ">
              <button  className="btn btn-danger btn-lg rounded-pill ">Buy now</button>

              </span>

            </span>

          </div>
        </div>
      </div>
      {/* Rare scooby */}
      <div className="container-fluid fontstyle rare-scooby main" id="about" style={{ backgroundColor: 'cyan' }}>
        <div className="row">
          <div className="col d-flex justify-content-center my-5">
            <img src="assets/DJ1.png" width=" 200" height="300" />
          </div>
          <div className="col px-5 py-5">
            <h1 className="fontt fw-bold">Rare-scooby</h1><br />
            <p> Solotopian NFTs are collection of programattically randomly generated NFTs on the Solana blockchain.
              The 1st generation consists of 10,000 randomly assembled Bears from over 300k total opinions.Each Bear is
              comprised of a unique body hat, face and outfit -the possibilities are endless!
              For more information on our roadmap, faq, etc,join our Discord!

            </p>
          </div>
        </div>

      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img src="assets/dogleft.png" width="200" height="300" className="px-2 mx-2 " />
            <img src="assets/dogright.png" width="200" height="300" className="right-dog" />
          </div>
          <div className="col-md-6 buy">
            <h1 className="pb-5 fontchoco display-3">WHERE CAN I BUY?</h1>
            <span className="d-grid gap-2  col-6 mx-auto">
              <button className="btn btn-lg btn-danger  mb-4 rounded-pill" >Buy on Rarescooby</button>
            </span>
            <br />
            <span className="d-grid gap-2  col-6 mx-auto">
              <button className="btn btn-lg btn-danger rounded-pill">Buy on Digital Eye</button>
            </span>

          </div>

        </div>
      </div>
      <div className="container-fluid fontstyle bg-dark text-white pt-2" id="attributes" >
        <div className="row">
          <div className="col">
            <h1 className="text-center display-3">Attributes</h1>
            <div className="row px-5 mx-5">
              <div className="col  d-grid gap-2  col-2 mx-auto">
                <img className="" src="assets/388.jpg" className="attributes-dog-border" width="280" />
                <br />
                <button className="btn btn-light rounded-pill fw-bold buttonfont">3% chance</button><br />
                <button className="btn btn-light rounded-pill fw-bold buttonfont">orange</button>
              </div>
              <div className="col d-grid gap-2  col-2 mx-auto">
                <img className="" src="assets/d1.jpg" width="280" className="attributes-dog-border" />
                <br />
                <button className="btn btn-light rounded-pill fw-bold buttonfont">12% chance</button><br />
                <button className="btn btn-light rounded-pill fw-bold buttonfont">yellow</button>
              </div>
              <div className="col d-grid gap-2  col-2 mx-auto">
                <img className="" src="assets/d2.jpg" width="280" className="attributes-dog-border" />
                <br />
                <button className="btn btn-light rounded-pill fw-bold buttonfont">4% chance</button><br />
                <button className="btn btn-light rounded-pill fw-bold buttonfont">brown</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ  */}
      <div className="container-fluid fontstyle bg-dark text-light py-5" id="faq">
        <div className="row ">
          <div className="col faq">
            <h1>FAQ</h1>
            <hr style={{ width: "50", height: "4px", color: "whitesmoke" }} />

            <h1>What is a NFT?</h1>
            <p>NFT stands for "non-fungible token." An NFT is basically data that is stored or accounted for in a digital ledger, and that data represents something specific. An NFT can, for example, represent a piece of art, a music album or other types of digital files.</p>
            <hr style={{ width: "50", height: "4px", color: "whitesmoke" }} />

            <h1>Where can I buy or sell Raredog?</h1>
            <p>We'r currently listed on Rarescooby and Digital Eyes.</p>
            <hr style={{ width: "50", height: "4px", color: "whitesmoke" }} />
            <h1>
              Where can I view my Rarescooby?</h1>
            <p>We recommend Phantom wallet or SolFlare. Click on the NFT tab in either wallet and you'll see your SolBear!</p>
            <hr style={{ width: "50", height: "4px", color: "whitesmoke" }} />
            <h1>What's Rarescooby?</h1>
            <p>:)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
