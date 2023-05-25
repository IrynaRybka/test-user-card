import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const ContainerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #ebd8ff;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;

export const CardLi = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const LogoIcon = styled(Icon)`
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
  fill: rgba(255, 255, 255, 0.3);
`;
export const BackgroundImg = styled.img`
  margin-left: 38px;
  margin-right: 38px;
  margin-top: -16px;
  z-index: -1;
  width: 308px;
  height: 168px;
`;
export const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  &::before {
    content: '';
    display: block;
    width: 380px;
    height: 8px;
    margin-top: 18px;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
    background-color: #ebd8ff;
  }
`;
export const AvatarImg = styled.img`
  position: absolute;
  top:50%;
left:50%;
transform:translate(-50%, -50%);
  height: 62px; 
  width: 62px;
  object-fit: cover;
  /* margin-left: auto;
  margin-right: auto; */
  background: #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const RingImg = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
  background-color: #ebd8ff;
  content: '';
  width: 80px;
  height: 80px;
  margin-top: -40px;
  border-radius: 50%;
`;
// export const EllipseImg = styled.img`
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: -68px;
// `


export const DefaultAvatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  cursor: pointer;
  border: 0;
  text-transform: uppercase;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
export const TweetP = styled.p`
  margin-bottom: 16px;
`;
export const FollowP = styled.p`
  margin-bottom: 26px;
`;

export const TweetSpan = styled.span`
  margin-right: 5px;
`;
export const FollowSpan = styled.span`
  margin-right: 5px;
`;
export const ContainerLoadMore = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
export const DescrP = styled.p`
  width: 100%;
  text-align: center;
`;

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  display: block;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
