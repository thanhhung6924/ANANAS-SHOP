import { Fragment, memo } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MainLayout({ children, ...props }) {
  return (
    <Fragment {...props}>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
export default memo(MainLayout);
