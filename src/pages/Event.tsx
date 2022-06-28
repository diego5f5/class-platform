import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-4xl">
            Select the class in the schedule on the side.
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
};

export default Event;
