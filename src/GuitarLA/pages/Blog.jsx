import Footer from "../components/footer";
import Header from "../components/header";
import Blog from "../components/blog";

const BlogPage = () => {
  return (
    <>
      <Header />
      <main className="nosotros nosotros__contenedor">
        <Blog isPage={true} />
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
