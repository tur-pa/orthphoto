import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Discoverpage from "./pages/Discoverpage";
import Userpage from "./pages/Userpage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout></AppLayout>}></Route>
          <Route
            path="discover"
            element={<Discoverpage></Discoverpage>}
          ></Route>
          <Route path="user" element={<Userpage></Userpage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      {/* </ReactQueryDevtools>
      </QueryClientProvider> */}
    </>
  );
}

export default App;
