
import './App.css';

function App() {
  return (
    <div className="App">
      <Card1
        access="✔"
        denied="✖"
      />
      <Card2
        access="✔"
        denied="✖"
      />
      <Card3
        access="✔"
      />
    </div>
  );
}

//create card
function Card1(props) {
  return (
    <div className='card-data'>
      <div className='card-head'>
        <h3>FREE</h3>
        <h6><span className='symbol'>$0</span><span className='month'>/month</span></h6>
        <hr></hr>
      </div>
      <div className='card-body'>
        <p><span>{props.access}</span>Single User</p>
        <p><span>{props.access}</span>5GB Storage</p>
        <p><span>{props.access}</span>Unlimited Public Projects</p>
        <p><span>{props.access}</span>Community Access</p>
        <p className='show'><span>{props.denied}</span>Unlimited Private Projects</p>
        <p className='show'><span>{props.denied}</span>Dedicated Phone Support</p>
        <p className='show'><span>{props.denied}</span>Free Subdomain</p>
        <p className='show'><span>{props.denied}</span>Monthly Status Reports</p>
        <div className='button-get'>
          <button type="button" className='btn'>BUTTON</button>
        </div>
      </div>
    </div>
  )

}
function Card2(props) {
  return (
    <div className='card-data'>
      <div className='card-head'>
        <h3>PLUS</h3>
        <h6><span className='symbol'>$9</span><span className='month'>/month</span></h6>
        <hr></hr>
      </div>
      <div className='card-body'>
        <p><span>{props.access}</span><b>5 Users</b></p>
        <p><span>{props.access}</span>50GB Storage</p>
        <p><span>{props.access}</span>Unlimited Public Projects</p>
        <p><span>{props.access}</span>Community Access</p>
        <p><span>{props.access}</span>Unlimited Private Projects</p>
        <p><span>{props.access}</span>Dedicated Phone Support</p>
        <p><span>{props.access}</span>Free Subdomain</p>
        <p className='show'><span>{props.denied}</span>Monthly Status Reports</p>
        <div className='button-get'>
          <button type="button" className='btn'>BUTTON</button>
        </div>
      </div>
    </div>
  )

}
function Card3(props) {
  return (
    <div className='card-data'>
      <div className='card-head'>
        <h3>PRO</h3>
        <h6><span className='symbol'>$49</span><span className='month'>/month</span></h6>
        <hr></hr>
      </div>
      <div className='card-body'>
        <p><span>{props.access}</span><b>Unlimited Users</b></p>
        <p><span>{props.access}</span>150GB Storage</p>
        <p><span>{props.access}</span>Unlimited Public Projects</p>
        <p><span>{props.access}</span>Community Access</p>
        <p><span>{props.access}</span>Unlimited Private Projects</p>
        <p><span>{props.access}</span>Dedicated Phone Support</p>
        <p><span>{props.access}</span> <b>Unlimited</b> Free Subdomain</p>
        <p><span>{props.access}</span>Monthly Status Reports</p>
        <div className='button-get'>
          <button type="button" className='btn'>BUTTON</button>
        </div>
      </div>
    </div>
  )

}
export default App;

