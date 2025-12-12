import { Header } from './components/header';
import { Post } from './post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Eduardo" content="lorem ipsum dolor sit amet" />
          <Post author="Maria" content="consectetur adipiscing elit" />
        </main>
      </div>
    </div>
  );
}
