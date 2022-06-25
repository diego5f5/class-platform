import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = ({ title, availableAt, type }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'MMMM d' • 'h:mm aaa"
  );

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Content released
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Coming soon
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === "live" ? "LIVE" : "PRACTICAL CLASS"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {/*  */}
          {title}
        </strong>
      </div>
    </a>
  );
};

export default Lesson;
