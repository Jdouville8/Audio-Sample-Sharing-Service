// import React, { useState } from "react";
// import Wave from "@foobar404/wave";

// function Visualizer() {
//   let [wave] = useState(new Wave());

//   navigator.mediaDevices
//     .getUserMedia({
//       audio: true,
//     })
//     .then(function (stream) {
//       wave.fromStream(stream, "output", {
//         type: "shine",
//         colors: ["red", "white", "blue"],
//       });
//     })
//     .catch(function (err) {
//       console.log(err.message);
//     });

//   return (
//     <div>
//       <canvas id="output" />
//     </div>
//   );
// }

// export default Visualizer;
