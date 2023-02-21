import {Routes, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet";
import HomePage from "./pages/Home"
import NewsPage from "./pages/News"
import ContactPage from "./pages/Contact"
import Home from "./pages/Home";

function App() {

    const dataTwitter = [
        {
            id: 1,
            name: 'Claudie Lind',
            nickname: 'jewel.glenn@example.com',
            avatar: 'https://picsum.photos/seed/1/400/400',
            created_at: '2020-10-12',
            content: 'Velit electram nec nonumy adipisci qualisque sit perpetua lorem cras. Veri efficitur ad fabellas tritani harum quo rutrum. Consectetuer solum prompta morbi dignissim rutrum cu mel saepe purus.',
            image: 'https://picsum.photos/id/1/500/300',
            info_counts: {
                comments : 200,
                retweets : 100,
                likes : 300,
                message : 40,
            }
        },
        {
            id: 2,
            name: 'Hayden Shields',
            nickname: 'augusta.whitley@example.com',
            avatar: 'https://picsum.photos/seed/2/400/400',
            created_at: '2020-10-12',
            content: `🔥 If you\'re tired of using outline styles for secondary buttons, a soft solid background
                based on the text color can be a great alternative.`,
            image: 'https://picsum.photos/id/2/500/300',
            info_counts: {
                comments : 100,
                retweets : 100,
                likes : 100,
                message : 100,
            }
        }
    ];

  return (
      <>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/news">News</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>
          </nav>

          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/news" element={<NewsPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        {/*<div className="App">*/}
        {/*  <header className="App-header">*/}
        {/*    <img src={logo} className="App-logo" alt="logo" />*/}
        {/*    <p>*/}
        {/*      Hello reactjs.*/}
        {/*    </p>*/}
        {/*    <a*/}
        {/*        className="App-link"*/}
        {/*        href="https://reactjs.org"*/}
        {/*        target="_blank"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      Learn React*/}
        {/*    </a>*/}
        {/*  </header>*/}
        {/*</div>*/}
        <Tweet dataTwitter={dataTwitter}/>
      </>

  );
}

export default App;
