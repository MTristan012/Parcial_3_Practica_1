import './App.css';

function App() {
  return (
    <div class="container">
      <header>
        <h2><a href="#s"><i class="ion-plane"></i> Katotravel</a></h2>
        <nav>
          <ul>
            <li>
            <a href="#s" title="Hotels">Hotels</a>
            </li>
            <li>
            <a href="#s" title="Flights">Flights</a>
            </li>
            <li>
            <a href="#s" title="Tours">Tours</a>
            </li>
            <li>
            <a class="btn" href="#s" title="Register / Log In">Register/Log In</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="cover">
        <h1>Discover what's out there.</h1>
        <form class="flex-form">
          <label for="from">
            <i class="ion-location"></i>
          </label>
          <input type="search" placeholder="Where do you want to go?"/>
          <input type="submit" value="Search"/>
        </form>
        <div id="madeby">
          <span>
            Photo by <a href="https://unsplash.com/@benblenner" target="_">Ben Blennerhassett</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App;
