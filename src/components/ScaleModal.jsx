import { CiCircleInfo } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";




function PopoverPositionedExample() {
  const umfScale = [
    { label: "10+", color: "#f0ad4e" },
    { label: "15+", color: "#dc3545" },
    { label: "20+", color: "deeppink" },
    { label: "24+", color: "purple" },
    { label: "26+", color: "#17a2b8" },
    { label: "28+", color: "#28a745" },
    { label: "30+", color: "#007bff" },
  ];

  const mgoScale = [
    { label: "263+", color: "#f0ad4e" },
    { label: "514+", color: "#dc3545" },
    { label: "829+", color: "deeppink" },
    { label: "1122+", color: "purple" },
    { label: "1282+", color: "#17a2b8" },
    { label: "1450+", color: "#28a745" },
    { label: "1620+", color: "#007bff" },
  ];
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key={"bottom"}
        placement={"bottom-start"}
        overlay={
          <Popover id={`popover-positioned-${"bottom"}`} style={{
            maxWidth: "600px",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          }}>
            <Popover.Body>
              <div
                className="overlay-card"
              >
                {/* UMF */}
                <div className="p-2 mb-3 border rounded bg-light">
                  <p>
                    <strong>UMF</strong> is the strength and purity rating of
                    Manuka honey.
                  </p>
                  <div className="d-flex flex-wrap justify-content-between mb-2">
                    {umfScale.map((item, idx) => (
                      <span
                        key={idx}
                        className="fw-medium small"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    {umfScale.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex-fill"
                        style={{ height: "4px", backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                  <small className="text-muted d-block mt-2">
                    The higher the number, the greater the potency and rarity of
                    Manuka honey.
                  </small>
                </div>

                {/* MGO */}
                <div className="p-2 border rounded bg-light">
                  <p>
                    <strong>MGO</strong> is the key natural compound that gives
                    Manuka honey its special antibacterial strength.
                  </p>
                  <div className="d-flex flex-wrap justify-content-between mb-2">
                    {mgoScale.map((item, idx) => (
                      <span
                        key={idx}
                        className="fw-medium small"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    {mgoScale.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex-fill"
                        style={{ height: "4px", backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                  <small className="text-muted d-block mt-2">
                    The higher the number, the higher the antibacterial
                    properties in the honey.
                  </small>
                </div>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <Button
          variant="light"
          size="sm"
          className="d-flex align-items-center gap-2 my-2 p-2 rounded-5"
        >
          <CiCircleInfo size={20} /> What is UMF and MGO?
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default PopoverPositionedExample;
