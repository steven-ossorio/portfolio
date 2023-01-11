import { useRouter } from "next/router";
import FirstDayCss from "../../../component/first-day-css.component";

const cssSingle = () => {
  const route = useRouter();
  const { id } = route.query;
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
