import { useLoadingStore } from "@/store/loadingPageStore";
import { Modal } from "@mui/material";
import LoadingPage from "../LoadingPage";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

const MainLayout = ({ children }: any) => {
  const { loading, toggleLoading } = useLoadingStore();
  return (
    <div id="root" className="root mn--max hd--expanded">
      <Header />
      <SideBar />
      <Modal
        open={loading}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoadingPage />
      </Modal>
      <section id="content" className="content">
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default MainLayout;
