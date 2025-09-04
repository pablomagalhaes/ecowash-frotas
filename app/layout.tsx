export const metadata = {
  title: 'EcoWash Frotas — Limpeza inteligente e ecológica',
  description: 'Lavagem ecológica e inteligente para frotas corporativas. Economia de água, operação in loco e padrão de qualidade.',
};
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
