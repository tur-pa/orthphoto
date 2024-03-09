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
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route element={<AppLayout></AppLayout>}>
              <Route path="discover" element={<Discover></Discover>}></Route>
              <Route path="user" element={<User></User>}></Route>
              <Route path="photo/:urlId" element={<Photo></Photo>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="signup" element={<SignUp></SignUp>}></Route>
            </Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
