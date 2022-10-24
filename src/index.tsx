import React from 'react'; import ReactDOM from 'react-dom/client'; import './index.css'; import App from './App'; import reportWebVitals from './reportWebVitals'; import StateInterface from './Model/StateInteface';  import { Container } from 'inversify';
import StateService from './Service/StateService';
import PostService from './Service/PostService';


const root = ReactDOM.createRoot(   document.getElementById('root') as HTMLElement );  export const container = new Container(); container.bind<StateService>('stateService').to(StateService);  container.bind<PostService>('postService').to(PostService);  root.render(   <React.StrictMode>         <App />   </React.StrictMode> );  // If you want to start measuring performance in your app, pass a function // to log results (for example: reportWebVitals(console.log)) // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals(); 