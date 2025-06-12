import { Tag as AntdTag } from 'antd';
import styled from 'styled-components';

interface IRootProps {}

export const Root = styled(AntdTag)<IRootProps>`
  padding: 2px 10px !important;
  margin-inline-end: unset !important;
`;
