import { Box, Center } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import React, { useRef, useEffect } from "react";
export default function Rocket() {
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
    spline.current.setZoom(1.6);
  }
  return (
    <Box minH={{ base: "15rem", md: "20rem" }} mb={{ base: 5, md: 3 }}>
      <Spline
        style={{ borderRadius: 20 }}
        scene="https://prod.spline.design/mfK65j4zF0rnj1tW/scene.splinecode"
        onLoad={onLoad}
      />
    </Box>
  );
}
