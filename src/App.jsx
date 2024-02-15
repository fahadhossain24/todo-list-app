import './App.css'
import { RouterProvider } from 'react-router-dom';
import routes from './router/router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <div className='bg-blue-100 text-blue-900'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </div>
  )
}

export default App
