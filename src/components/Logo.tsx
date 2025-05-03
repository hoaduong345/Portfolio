import { Box, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

export const Logo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  
  // Using a more harmonious color palette
  const textColor = useColorModeValue('#2D3748', '#F7FAFC');
  const primaryColor = useColorModeValue('#3182CE', '#63B3ED'); // Blue tone
  const accentColor = useColorModeValue('#38B2AC', '#4FD1C5');  // Teal tone
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = 200 * dpr;
      canvas.height = 50 * dpr;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasDimensions();
    
    // Animation variables
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      life: number;
    }> = [];
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center everything better for balance
      const centerY = 25;
      
      // Draw the HTML-style logo
      ctx.save();
      
      // Draw the opening bracket
      ctx.font = 'bold 28px monospace';
      ctx.fillStyle = textColor;
      ctx.fillText('<', 50, centerY + 8);
      
      // Draw the name - adjusted spacing
      ctx.font = 'bold 20px monospace';
      ctx.fillStyle = primaryColor;
      ctx.fillText('dev', 68, centerY + 8);
      
      // Draw the slash - adjusted spacing
      ctx.fillStyle = accentColor;
      ctx.fillText('/', 100, centerY + 8);
      
      // Draw the closing bracket - adjusted spacing
      ctx.fillStyle = textColor;
      ctx.fillText('>', 115, centerY + 8);
      
      // Properly centered blinking cursor
      time += 0.05;
      if (Math.sin(time * 2) > 0) {
        ctx.fillStyle = accentColor;
        ctx.fillRect(135, centerY + 3, 6, 2);
      }
      
      // Particle system with harmonious colors - adjusted position
      if (Math.random() < 0.06) {
        particles.push({
          x: 75 + Math.random() * 30,
          y: centerY + Math.random() * 10 - 5,
          radius: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.5 ? primaryColor : accentColor,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          life: 80 + Math.random() * 40
        });
      }
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        const alpha = p.life / 100;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      
      // Balanced glow effect around the brackets
      const glowIntensity = (Math.sin(time) * 0.4 + 0.4) * 0.7;
      ctx.shadowBlur = 4;
      ctx.shadowColor = primaryColor;
      ctx.globalAlpha = glowIntensity;
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 0.8;
      
      // Refined glow around HTML brackets - adjusted for new positions
      ctx.beginPath();
      ctx.moveTo(50, centerY);
      ctx.lineTo(50, centerY + 8);
      ctx.lineTo(65, centerY + 8);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(115, centerY);
      ctx.lineTo(115, centerY + 8);
      ctx.lineTo(100, centerY + 8);
      ctx.stroke();
      
      // Reset shadow and alpha
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      
      ctx.restore();
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [textColor, primaryColor, accentColor]);
  
  // Centered container
  return (
    <Box
      as="div"
      transition="all 0.3s ease"
      _hover={{ 
        transform: "scale(1.03)",
        boxShadow: `0 0 8px ${primaryColor}`
      }}
      height="50px"
      width="200px"
      cursor="pointer"
      borderRadius="4px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        as="canvas"
        ref={canvasRef}
        width="200px"
        height="50px"
        style={{ width: '200px', height: '50px' }}
      />
    </Box>
  );
};