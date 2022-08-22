import Navbar from "./sidebar";
import Header from "./header";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <article className="content border-solid border-2 border-indigo-600">
        {children}
      </article>
    </div>
  );
}
