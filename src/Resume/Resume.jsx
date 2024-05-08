import PreviewPage from "./PreviewPage";
import DataInputPage from "./DataInputPage";
import Header from "./Header";
let Resume = () => {
  return (
    <>

    <main className="border flex flex-col items-center font-serif">
      <Header />
      <DataInputPage />
      <PreviewPage />
      
    </main>
      
    </>
  );
};
export default Resume;
