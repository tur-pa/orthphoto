import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

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
          <Route element={<AppLayout></AppLayout>}>
            <Route index element={<Navigate replace to="/"></Navigate>}></Route>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </ReactQueryDevtools>
      </QueryClientProvider> */}
    </>
  );
}

export default App;
