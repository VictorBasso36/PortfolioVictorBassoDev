import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import axios from 'axios';
import { useState, useEffect } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--Font',
});

interface Position {
  x: number;
  y: number;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [posicaoMouse, setPosicaoMouse] = useState<Position>({ x: 0, y: 0 });
  const [paginaAtual, setPaginaAtual] = useState<string>('');

  function capturarPosicaoMouse(evento: React.MouseEvent<HTMLDivElement>) {
    setPosicaoMouse({ x: evento.clientX, y: evento.clientY });
  }

  useEffect(() => {
    setPaginaAtual(window.location.pathname);

    const intervalo = setInterval(() => {
      axios
        .post('http://localhost:7777/heatmap', { position: posicaoMouse, page: paginaAtual })
        .then(() => {
          console.log('Coordenadas do mouse e rota enviadas com sucesso');
        })
        .catch((err) => {
          console.error('Erro ao enviar as coordenadas do mouse e rota:', err);
        });
    }, 3000);

    return () => clearInterval(intervalo);
  }, [posicaoMouse, paginaAtual]);

  return <div onMouseMove={capturarPosicaoMouse}>{children}</div>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
