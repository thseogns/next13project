/** @format */
"use client";
import React from "react";

import registMouseDownDrag from "./registMouseDownDrag";
const ResizeDiagonal = () => {
  const inrange = (v: number, min: number, max: number) => {
    if (v < min) return min;
    if (v > max) return max;
    return v;
  };
  const BOUNDARY_MARGIN = 12;
  const MIN_W = 10;
  const MIN_H = 10;
  const [{ x, y, w, h }, setConfig] = React.useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  const boundaryRef = React.useRef<HTMLDivElement>(null);
  // 2️⃣
  React.useEffect(() => {
    const boundary = boundaryRef.current?.getBoundingClientRect();

    if (boundary) {
      const DEFAULT_W = 50;
      const DEFAULT_H = 50;
      setConfig({
        x: Math.floor(boundary.width / 2 - DEFAULT_W / 2),
        y: Math.floor(boundary.height / 2 - DEFAULT_H / 2),
        w: DEFAULT_W,
        h: DEFAULT_H,
      });
    }
  }, []);

  return (
    <div className="relative w-full h-full m-0" ref={boundaryRef}>
      <div
        style={{ width: w, height: h, left: x, top: y }}
        className="relative border"
        {...registMouseDownDrag((deltaX, deltaY) => {
          if (!boundaryRef.current) return;

          const boundary = boundaryRef.current.getBoundingClientRect();
          setConfig({
            x: inrange(
              x + deltaX,
              BOUNDARY_MARGIN,
              boundary.width - w - BOUNDARY_MARGIN
            ),
            y: inrange(
              y + deltaY,
              BOUNDARY_MARGIN,
              boundary.height - h - BOUNDARY_MARGIN
            ),
            w,
            h,
          });
        })}
      >
        <div
          className="absolute top-[-1px] right-[-1px] h-4px w-4px cursor-ne-resize"
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            const boundary = boundaryRef.current.getBoundingClientRect();

            setConfig({
              x,
              y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
              w: inrange(
                w + deltaX,
                MIN_W,
                boundary.width - x - BOUNDARY_MARGIN
              ),
              h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
            });
          }, true)}
        />
        <div
          className="absolute bottom-[-1px] right-[-1px] h-4px w-4px cursor-nw-resize"
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            const boundary = boundaryRef.current.getBoundingClientRect();

            setConfig({
              x,
              y,
              w: inrange(
                w + deltaX,
                MIN_W,
                boundary.width - x - BOUNDARY_MARGIN
              ),
              h: inrange(h + deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
            });
          }, true)}
        />
        <div
          className="absolute top-[-1px] left-[-1px] h-4px w-4px cursor-nw-resize"
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            const boundary = boundaryRef.current.getBoundingClientRect();

            setConfig({
              x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
              y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
              w: inrange(
                w - deltaX,
                MIN_W,
                boundary.width - x - BOUNDARY_MARGIN
              ),
              h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
            });
          }, true)}
        />
        <div
          className="absolute bottom-[-1px] left-[-1px] h-4px w-4px cursor-ne-resize"
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            const boundary = boundaryRef.current.getBoundingClientRect();

            setConfig({
              x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
              y,
              w: inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
              h: inrange(
                h + deltaY,
                MIN_H,
                boundary.height - y - BOUNDARY_MARGIN
              ),
            });
          }, true)}
        />
      </div>
    </div>
  );
};

export default ResizeDiagonal;
