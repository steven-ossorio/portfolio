const FirstDayCss = () => {
  console.log("loading the css project");
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="year">
        <span style={{ "--clr": "#1da1f2" }} data-text="2">
          <strong> 2 </strong>
        </span>
        <span style={{ "--clr": "#fffc00" }} data-text="0">
          <strong> 0 </strong>
        </span>
        <span style={{ "--clr": "#ff1359" }} data-text="2">
          <strong> 2 </strong>
        </span>
        <span style={{ "--clr": "#25d366" }} data-text="3">
          <strong> 2 </strong>
        </span>
      </div>
    </div>
  );
};

export default FirstDayCss;
