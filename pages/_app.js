import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider,  } from "react-query";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient =new QueryClient();
  return (
    <div className="h-screen  w-screen overflow-x-hidden overflow-y-scroll bg-slate-100">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SessionProvider session={session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}
