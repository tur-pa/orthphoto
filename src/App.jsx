import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Discover from "./pages/Discover";
import User from "./pages/User";
import AppLayout from "./ui/AppLayout";
import Photo from "./pages/Photo";

import { DataProvider } from "./context/DataContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route element={<AppLayout></AppLayout>}>
              <Route path="discover" element={<Discover></Discover>}></Route>
              <Route path="user" element={<User></User>}></Route>
              <Route path="photo/:photoId" element={<Photo></Photo>}></Route>
            </Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </DataProvider>
  );
}

export default App;
