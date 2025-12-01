import BlogList from './BlogList/BlogList';
import { blogs } from '../data/blogs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Indian Tech Blogs</h1>
        <p>Click on any blog title to read the content</p>
      </header>
      <main>
        <BlogList blogs={blogs} />
      </main>
    </div>
  );
}

export default App;