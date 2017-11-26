import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {jobs: []}
  
  componentDidMount() {
    axios.get('/qsync/jobs')
      .then((resp) => {
        this.setState({jobs: resp.data})
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Jobs</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Server</th>
              <th>Folder pairs</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jobs.map(job =>
              <tr key={job.id}>
                <td>{job.name}</td>
                <td>{job.server}:{job.port}</td>
                <td>
                {job.folderPairs.map((pair, key) => {
                  return <p key={key}>src: {pair.src} --- dst: {pair.dst}</p>
                })}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
