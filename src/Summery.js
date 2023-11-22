export default function Summery(){
    return(
        <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid grey 2px",
            margin: "20px",
            width: "50%",
            height: "40px",
            marginLeft: "12%",
            // padding:"30%"
          }}
        >
             Customer Details
        </div>
        <div
          style={{
             display: "flex",
            alignItems: "center",
            border: "solid grey 2px",
            margin: "10px",
            width: "50%",
            height: "40px",
            marginLeft: "12%",
          }}
        >
          Order Summary
        </div>
        </div>
    );
}