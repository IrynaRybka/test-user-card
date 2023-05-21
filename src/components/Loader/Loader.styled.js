import styled from '@emotion/styled';

export const LoaderDiv = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1500;

  height: 50px;
  width: 50px;

  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#766DF4 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#766DF4);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;


@keyframes s3{ 
  100%{transform: rotate(1turn)}
}`