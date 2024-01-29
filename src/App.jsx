import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}>
          <BrowserRouter>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </BrowserRouter>
        </ReactQueryDevtools>
      </QueryClientProvider>
    </>
  );
}

export default App;
