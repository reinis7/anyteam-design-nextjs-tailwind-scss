import Header from "./Header";
import PageWrapper from "./PageWrapper";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <PageWrapper>
        <Header />
        {children}
      </PageWrapper>
    </div>
  );
};

export default Layout;
