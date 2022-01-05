import Home from './components/page/Home';
import Posts from './components/page/Posts';
import PostDetail from './components/page/PostDetail';
import About from './components/page/About';
import Contact from './components/page/Contact';
import PostSearch from './components/page/PostSearch';
import Animals from './components/page/Animals';

const routes = [
  { title: 'Home', path: '/', element: Home, isNav: true },
  { title: 'Animals', path: 'animals', element: Animals, isNav: true },
  { title: 'Posts', path: 'posts', element: Posts, isNav: false },
  { title: 'About', path: 'about', element: About, isNav: true },
  { title: 'Contact', path: 'contact', element: Contact, isNav: true },
  {
    title: 'PostDetail',
    path: 'posts/:postId',
    element: PostDetail,
    isNav: false,
  },
  { title: 'PostSearch', path: '/search', element: PostSearch, isNav: false },
];

export default routes;
