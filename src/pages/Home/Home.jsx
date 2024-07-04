import React, { Suspense, lazy } from "react";
const Component1 = lazy(() => import("../../components/weather/Weather"));
function Home() {
  return (
    <div>
      // {/* weather  */}
      <Suspense fallback={<p>Weather details are loading please wait..</p>}>
        <Component1 />
      </Suspense>
    </div>
  );
}

export default Home;
