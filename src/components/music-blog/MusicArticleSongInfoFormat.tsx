import { lazy } from "react";

type Props = {
  videoOrImage?: string;
  songTitle: string;
  songArtist: string;
  album?: string;
  highestChartingPos: number;
  weeksOnChart: number;
  billboardYearEndRank?: number;
  cumulativeHighestChartingPos?: number;
  cumulativeWeeksOnChart?: number;
  previousBillboardYearEndRank?: number;
  year?: string;
  previousBillboardYearEndYear?: string;
  children?: React.ReactNode;
};

const MusicArticleSongInfoFormat: React.FC<Props> = ({
  videoOrImage,
  songTitle,
  songArtist,
  album,
  highestChartingPos,
  weeksOnChart,
  billboardYearEndRank,
  cumulativeHighestChartingPos,
  cumulativeWeeksOnChart,
  previousBillboardYearEndRank,
  year,
  previousBillboardYearEndYear,
  children,
}) => {
  return (
    <div style={{ marginBottom: "10%" }}>
      <iframe src={videoOrImage ?? "about:blank"} loading={"lazy"}></iframe>
      <h4>
        <strong>
          {songTitle} - {songArtist}
        </strong>
      </h4>
      <h5>
        <b>Album:</b>{" "}
        {album == "TBA" || album == "non-album single" ? <i>{album}</i> : album}
      </h5>
      <div className="two-container-middle-box">
        <div className="middle-box-left" style={{ width: "40%" }}>
          <h5>
            <b>{year} Chart Peak:</b> {highestChartingPos}
          </h5>
          <h5>
            <b>Weeks on {year} Chart:</b> {weeksOnChart}
          </h5>
          <h5>
            <b>Billboard Year-End Rank:</b> {billboardYearEndRank ?? "N/A"}
          </h5>
        </div>
        {cumulativeWeeksOnChart != null ? (
          <div className="middle-box-right" style={{ width: "60%" }}>
            <h5>
              <b>Historical Chart Peak:</b> {cumulativeHighestChartingPos}
            </h5>
            <h5>
              <b>Total Weeks on Chart:</b> {cumulativeWeeksOnChart}
            </h5>
            <h5>
              <b>Previous Billboard Year-End Rank:</b>{" "}
              {previousBillboardYearEndRank != null
                ? previousBillboardYearEndRank +
                  " (" +
                  previousBillboardYearEndYear +
                  ")"
                : "N/A"}
            </h5>
          </div>
        ) : null}
      </div>
      <p></p>
      {children}
    </div>
  );
};

export default MusicArticleSongInfoFormat;
