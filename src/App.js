<<<<<<< HEAD
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
	pageSize = 5;
	apiKey = process.env.REACT_APP_NEWS_API;

	state = {
		progress: 0
	};
	setProgress = (progress) => {
		this.setState({ progress: progress });
	};

	render() {
		return (
			<div>
				<Router>
					<NavBar/>
					<LoadingBar height={3} color="gold" progress={this.state.progress} />
					<Switch>
						<Route exact path="/">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="general"
								pageSize={this.pageSize}
								country="in"
								category="general"
							/>
						</Route>
						<Route exact path="/business">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="business"
								pageSize={this.pageSize}
								country="in"
								category="business"
							/>
						</Route>
						<Route exact path="/entertainment">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="entertainment"
								pageSize={this.pageSize}
								country="in"
								category="entertainment"
							/>
						</Route>
						<Route exact path="/general">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="general"
								pageSize={this.pageSize}
								country="in"
								category="general"
							/>
						</Route>
						<Route exact path="/health">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="health"
								pageSize={this.pageSize}
								country="in"
								category="health"
							/>
						</Route>
						<Route exact path="/science">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="science"
								pageSize={this.pageSize}
								country="in"
								category="science"
							/>
						</Route>
						<Route exact path="/sports">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="sports"
								pageSize={this.pageSize}
								country="in"
								category="sports"
							/>
						</Route>
						<Route exact path="/technology">
							<News
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="technology"
								pageSize={this.pageSize}
								country="in"
								category="technology"
							/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 7fed584 (Initialize project using Create React App)
