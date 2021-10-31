import About from '../components/About';
import Form from '../components/Form';
import Home from '../components/Home';
import Result from '../components/Result';

export default [
  {
    path: '/',
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