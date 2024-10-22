import { Videos } from "../../video/video";

import { selections } from "./header/selection";
import Video from "./video/Video";

function page() {
  const selected = "all";
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max">
        {selections.map((selection) => (
          <p
            key={selection}
            className={` font-bold cursor-pointer hover:bg-gray-400 ${
              selection == selected ? "bg-foreground text-background" : "bg-primarycolor"
            } p-2 rounded-lg w-max m-2 capitalize px-4`}
          >
            {selection}
          </p>
        ))}
      </div>
      <Video Videos={Videos} />
    </div>
  );
}

export default page;
