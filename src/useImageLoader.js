import { useEffect, useState } from "react";

export default function useImageLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setLoaded(true);
      return;
    }
 
    const imageLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoaded(true);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener("load", imageLoaded);
        img.addEventListener("error", imageLoaded);
      }
    });

  }, []);

  return loaded;
}
