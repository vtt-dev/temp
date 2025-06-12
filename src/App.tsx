import './App.css';
import {
  AntdProvider,
  AppRouterProvider,
  ReactQueryProvider,
} from './providers';

function App() {
  return (
    <ReactQueryProvider>
      <AntdProvider>
        <AppRouterProvider />
      </AntdProvider>
    </ReactQueryProvider>
  );
}

export default App;
