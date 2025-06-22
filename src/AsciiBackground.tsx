import React, { useRef, useEffect } from 'react';

interface AsciiBackgroundProps {
    asciiChars?: string[];
    fontSize?: number;
    bgColor?: string;
    updateInterval?: number;
    avoidSelector?: string;
    avoidPadding?: number;
}

const AsciiBackground: React.FC<AsciiBackgroundProps> = ({
    asciiChars = ' .:/\[]{}()<>*+-=!?#&$@'.split(''),
    fontSize = 16, // pixels
    bgColor = '#F5F5DC', // Light Beige background for the canvas itself
    updateInterval = 100, // ms, how often to update characters
    avoidSelector = '[data-avoid-ascii="true"]',
    avoidPadding = 10 // default padding
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const lastUpdateTime = useRef<number>(0);
    const forbiddenZonesRef = useRef<DOMRect[]>([]);

    // Store grid data and dimensions in a ref to avoid re-renders
    const gridStateRef = useRef<{
        grid: { char: string; opacity: number }[][];
        cols: number;
        rows: number;
        scaledCanvasWidth: number;
        scaledCanvasHeight: number;
    }>({ grid: [], cols: 0, rows: 0, scaledCanvasWidth: 0, scaledCanvasHeight: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.parentElement) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const updateForbiddenZones = () => {
            const elementsToAvoid = document.querySelectorAll(avoidSelector);
            forbiddenZonesRef.current = Array.from(elementsToAvoid).map(el => {
                const rect = el.getBoundingClientRect();
                return new DOMRect(
                    rect.x - avoidPadding,
                    rect.y - avoidPadding,
                    rect.width + (avoidPadding * 2),
                    rect.height + (avoidPadding * 2)
                );
            });
        };

        const initializeGrid = () => {
            const dpr = window.devicePixelRatio || 1;
            const parentElement = canvas.parentElement!;
            
            const newWidth = parentElement.clientWidth;
            const newHeight = parentElement.clientHeight;

            canvas.width = newWidth * dpr;
            canvas.height = newHeight * dpr;
            canvas.style.width = `${newWidth}px`;
            canvas.style.height = `${newHeight}px`;
            
            context.resetTransform();
            context.scale(dpr, dpr);

            const cols = Math.floor(newWidth / fontSize);
            const rows = Math.floor(newHeight / fontSize);

            gridStateRef.current = {
                grid: Array.from({ length: rows }, () =>
                    Array.from({ length: cols }, () => ({
                        char: asciiChars[Math.floor(Math.random() * asciiChars.length)],
                        opacity: Math.random(),
                    }))
                ),
                cols,
                rows,
                scaledCanvasWidth: newWidth,
                scaledCanvasHeight: newHeight,
            };
            
            lastUpdateTime.current = 0;
        };

        const draw = (time: number) => {
            const currentCanvas = canvasRef.current;
            if (!currentCanvas) return;

            const { grid, cols, rows, scaledCanvasWidth, scaledCanvasHeight } = gridStateRef.current;

            if (time - lastUpdateTime.current > updateInterval) {
                lastUpdateTime.current = time;
                const updates = Math.max(1, Math.floor(rows * cols * 0.05));
                for (let i = 0; i < updates; i++) {
                    const r = Math.floor(Math.random() * rows);
                    const c = Math.floor(Math.random() * cols);
                    if (grid[r]?.[c]) {
                        grid[r][c] = {
                            char: asciiChars[Math.floor(Math.random() * asciiChars.length)],
                            opacity: Math.random(),
                        };
                    }
                }
            }
            
            const canvasRect = currentCanvas.getBoundingClientRect();
            context.fillStyle = bgColor;
            context.fillRect(0, 0, scaledCanvasWidth, scaledCanvasHeight);
            context.font = `${fontSize}px monospace`;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const cell = grid[r]?.[c];
                    if (!cell) continue;

                    const charX = c * fontSize;
                    const charY = r * fontSize;
                    const charCenterX = charX + fontSize / 2 + canvasRect.left;
                    const charCenterY = charY + fontSize / 2 + canvasRect.top;

                    const isForbidden = forbiddenZonesRef.current.some(zone =>
                        charCenterX > zone.left && charCenterX < zone.right &&
                        charCenterY > zone.top && charCenterY < zone.bottom
                    );

                    if (!isForbidden) {
                        context.fillStyle = `rgba(0, 0, 0, ${cell.opacity})`;
                        context.fillText(cell.char, charX, charY + fontSize * 0.8); 
                    }
                }
            }
            animationFrameId.current = requestAnimationFrame(draw);
        };

        const setup = () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            initializeGrid();
            updateForbiddenZones();
            animationFrameId.current = requestAnimationFrame(draw);
        };

        setup();

        window.addEventListener('resize', setup);
        window.addEventListener('scroll', updateForbiddenZones, true);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('resize', setup);
            window.removeEventListener('scroll', updateForbiddenZones, true);
            context.resetTransform();
        };
    }, [asciiChars, fontSize, bgColor, updateInterval, avoidSelector, avoidPadding]);

    return (
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0, backgroundColor: bgColor, padding: 0 }}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
    );
};

export default AsciiBackground;
