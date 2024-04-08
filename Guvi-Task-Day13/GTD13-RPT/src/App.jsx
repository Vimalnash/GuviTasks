import './App.css'

// Creates PriceCard
function CreateCard(data) {
  // console.log(data);
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div id="price-type">{data.carddata.condition1.value}</div>
          <div id="price-tag">{data.carddata.condition2.value}</div>
        </div>
        <div className="card-body">
          <div className={data.carddata.condition3.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition3.symbol}</span>
            <span>{data.carddata.condition3.value}</span>
          </div>
          <div className={data.carddata.condition4.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition4.symbol}</span>
            <span>{data.carddata.condition4.value}</span>
          </div>
          <div className={data.carddata.condition5.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition5.symbol}</span>
            <span>{data.carddata.condition5.value}</span>
          </div>
          <div className={data.carddata.condition6.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition6.symbol}</span>
            <span>{data.carddata.condition6.value}</span>
          </div>
          <div className={data.carddata.condition7.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition7.symbol}</span>
            <span>{data.carddata.condition7.value}</span>
          </div>
          <div className={data.carddata.condition8.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition8.symbol}</span>
            <span>{data.carddata.condition8.value}</span>
          </div>
          <div className={data.carddata.condition9.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition9.symbol}</span>
            <span>{data.carddata.condition9.value}</span>
          </div>
          <div className={data.carddata.condition10.symbol}>
            <span className="material-symbols-outlined">{data.carddata.condition10.symbol}</span>
            <span>{data.carddata.condition10.value}</span>
          </div>
          <button className="btn" id={data.carddata.condition1.value}>BUTTON</button>
        </div>
      </div>
    </div>
  )
};

//Creates PriceCard Container
function PriceCardContainer() {
  const pricelist = [
    {
      condition1 : {value:"FREE"},
      condition2 : {value:"$0/month"},
      condition3 : {symbol:"check_small", value:"Single User"},
      condition4 : {symbol:"check_small", value:"50GB Storate"},
      condition5 : {symbol:"check_small", value:"Unlimited Public Projects"},
      condition6 : {symbol:"check_small", value:"Community Access"},
      condition7 : {symbol:"close_small", value:"Unlimited Private Projects"},
      condition8 : {symbol:"close_small", value:"Dedicated Phone Support"},
      condition9 : {symbol:"close_small", value:"Free Subdomain"},
      condition10 : {symbol:"close_small", value:"Monthly Status Reports"},
    },
    {
      condition1 : {value:"PLUS"},
      condition2 : {value:"$9/month"},
      condition3 : {symbol:"check_small", value:"5 Users"},
      condition4 : {symbol:"check_small", value:"50GB Storate"},
      condition5 : {symbol:"check_small", value:"Unlimited Public Projects"},
      condition6 : {symbol:"check_small", value:"Community Access"},
      condition7 : {symbol:"check_small", value:"Unlimited Private Projects"},
      condition8 : {symbol:"check_small", value:"Dedicated Phone Support"},
      condition9 : {symbol:"check_small", value:"Free Subdomain"},
      condition10 : {symbol:"close_small", value:"Monthly Status Reports"},
    },
    {
      condition1 : {value:"PRO"},
      condition2 : {value:"$49/month"},
      condition3 : {symbol:"check_small", value:"Unlimited Users"},
      condition4 : {symbol:"check_small", value:"50GB Storate"},
      condition5 : {symbol:"check_small", value:"Unlimited Public Projects"},
      condition6 : {symbol:"check_small", value:"Community Access"},
      condition7 : {symbol:"check_small", value:"Unlimited Private Projects"},
      condition8 : {symbol:"check_small", value:"Dedicated Phone Support"},
      condition9 : {symbol:"check_small", value:"Free Subdomain"},
      condition10 : {symbol:"check_small", value:"Monthly Status Reports"},
    },
  ]

  return (
    <div>
      <div className="card-container">
        <CreateCard carddata ={pricelist[0]} />
        <CreateCard carddata ={pricelist[1]} />
        <CreateCard carddata ={pricelist[2]} />
      </div>
    </div>
  )
}

function Welcome(data) {
  return (
    <div>
      <h1 className="page-header">{data.pagetitle}</h1>
    </div>
  )
};

function App() {
  return (
    <>
      <Welcome pagetitle = "Welcome - React Price Card Task" />
      <PriceCardContainer />
    </>
  )
};


export default App
