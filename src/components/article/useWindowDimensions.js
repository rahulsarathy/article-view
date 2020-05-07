import { useState, useEffect } from "react";

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height,
    pageYOffset: offset,
  } = window;

  var body = document.body,
    html = document.documentElement;
  var total = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  return {
    width,
    height,
    offset,
    total,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    function observe() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleResize);

    var targetNode = document.getElementById("root");
    var observerOptions = {
      childList: true,
      attributes: true,
      subtree: true, //Omit or set to false to observe only changes to the parent node.
    };
    var observer = new MutationObserver(observe);
    observer.observe(targetNode, observerOptions);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return windowDimensions;
}
