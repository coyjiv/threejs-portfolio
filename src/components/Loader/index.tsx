import React from 'react';
import { useProgress, Html } from '@react-three/drei';

export function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    progress < 100 ?
    <Html center>
      <div style={{ color: 'white', fontSize: '4em', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {progress} % loaded
      </div>
    </Html>
    : <></>
  );
}