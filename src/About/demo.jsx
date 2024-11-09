import dynamic from 'next/dynamic';
import './demo.css';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Home() {
  return (
    <main className='main'>
      <div className='spline-container'>
        <Spline
          scene="https://prod.spline.design/VpoVxkYMMsnb66bR/scene.splinecode"
          style={{ width:'100%', height: '100%',overflow:'hidden'}}
        />
      </div>
    </main>
  );
}
