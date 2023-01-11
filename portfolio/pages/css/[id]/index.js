import { useRouter } from "next/router";
import FirstDayCss from "../../../component/first-day-css.component";

const cssSingle = () => {
  const route = useRouter();
  const { id } = route.query;
  console.log("single page is loading");
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <FirstDayCss />
    </div>
  );
};

export default cssSingle;
