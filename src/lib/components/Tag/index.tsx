import { TagProps as AntdTagProps } from 'antd';
import { Root } from './styles';

export interface ITagProps extends AntdTagProps {}

const Tag = (props: ITagProps) => {
  return <Root {...props} />;
};

export default Tag;
