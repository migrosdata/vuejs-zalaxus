import About from '../components/About';
import Form from '../components/Form';
import Home from '../components/Home';
import Result from '../components/Result';
import Welcome from '../components/Welcome';

export default [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/form',
    component: Form
  },
  {
    name: "result",
    path: '/result',
    component: Result
  },
];