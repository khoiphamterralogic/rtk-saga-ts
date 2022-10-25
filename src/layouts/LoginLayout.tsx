import { Outlet } from 'react-router-dom';

export interface LoginLayoutProps {}

export function LoginLayout(props: LoginLayoutProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </div>
  );
}
