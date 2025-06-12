import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

interface IAntdProviderProps {
  children: ReactNode;
}

const AntdProvider = (props: IAntdProviderProps) => {
  const { children } = props;

  return <ConfigProvider>{children}</ConfigProvider>;
};

export default AntdProvider;
