import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className="">
        <Head>
            <title>Raddit Clone 2.0</title>
        </Head>
            <header className="sticky top-0 z-10">
                {/* agr hum navbar me ja kar parent class per position 
                sticky apply karty tu work na karti soo hum ny Navbar component call
                karwaty waqt hi (position sticky k div me hi call karwa di)
                 apply kar di
                 */}
                <Navbar /> 
            </header>

            <main className="my-3 max-w-5xl mx-auto">
                    {children}
            </main>
        </div>
    );
}

export default Layout;