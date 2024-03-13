

import Checkout from './Checkout';
import { Suspense } from 'react';
import Loader from './Loader';
 

function App() {
  return (
    <div className="App">
      
            <Suspense fallback={<Loader />}>
    <Checkout />
    </Suspense>
    
    </div>
  );
}

export default App;
