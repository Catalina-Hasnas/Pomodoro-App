import "./circularProgress.scss";

const radius = 44;
const xy = 50;
const dashArr = 275;

export const CircularProgress = ({ percent }: { percent: number }) => {
  const strokeDashOffsetBar = ((100 - percent) / 100) * dashArr;

  return (
    <div id="cont" className="absolute-centering">
      <svg
        id="svg"
        height="100%"
        width="100%"
        style={{ transform: "rotate(-90deg)" }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r={radius}
          cx={xy}
          cy={xy}
          fill="transparent"
          strokeDasharray={dashArr}
          strokeDashoffset="0"
        ></circle>
        <circle
          id="bar"
          r={radius}
          cx={xy}
          cy={xy}
          fill="transparent"
          strokeDasharray={dashArr}
          strokeDashoffset="0"
          style={{ strokeDashoffset: `-${strokeDashOffsetBar}px` }}
        ></circle>
      </svg>
    </div>
  );
};
