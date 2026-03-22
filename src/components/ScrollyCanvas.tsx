"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, motion, MotionValue } from "framer-motion";

const FRAME_COUNT = 105;

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const progress = Math.round((loadedCount / FRAME_COUNT) * 100);
  const isLoaded = loadedCount === FRAME_COUNT;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.jpg`;

      img.onload = () => {
        setLoadedCount(prev => prev + 1);
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Map scroll progress (0 to 1) to frame index (0 to 104)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;

    const renderFrame = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame];

      if (img) {
        // Handle object-fit: cover logic manually inside canvas
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let renderWidth, renderHeight, xOffset, yOffset;

        if (canvasRatio > imgRatio) {
          renderWidth = canvas.width;
          renderHeight = canvas.width / imgRatio;
          xOffset = 0;
          yOffset = (canvas.height - renderHeight) / 2;
        } else {
          renderWidth = canvas.height * imgRatio;
          renderHeight = canvas.height;
          xOffset = (canvas.width - renderWidth) / 2;
          yOffset = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
      }
    };

    // Use resize observer for accurate dimensions
    const resizeObserver = new ResizeObserver(() => {
      // Setup canvas internal dimensions to match display size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      renderFrame();
    });
    
    resizeObserver.observe(canvas);

    // Subscribe to scroll updates
    const unsubscribe = frameIndex.on("change", () => {
      animationFrameId = requestAnimationFrame(renderFrame);
    });

    return () => {
      unsubscribe();
      resizeObserver.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, images, frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      {/* Cinematic Loading Screen matching reference */}
      <motion.div 
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#121212]"
      >
        <div className="flex flex-col items-start w-full max-w-[320px]">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-8 self-center">
            Samanvita.
          </h1>
          <div className="w-full h-[2px] bg-white/10 mb-5 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              animate={{ width: `${progress}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
          </div>
          <div className="w-full flex justify-between tracking-[0.2em] text-[10px] md:text-xs font-medium uppercase text-white/50">
            <span>Loading Experience</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>

      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
