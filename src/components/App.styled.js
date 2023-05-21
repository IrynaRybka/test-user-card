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
  /* position: relative; */
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
`;
export const AvatarImg = styled.img`
  height: 80px; //62px
  width: 80px;
  object-fit: cover;
  display: inline;
  background: #ebd8ff;
  border-radius: 50%;
  /* border: 13px solid #ebd8ff; */
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  margin-bottom: 26px;
  margin-top: -18px;
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
  transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover, 
  &:focus {
    background-color: #5CD3A8;
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
`
export const FollowSpan = styled.span`
margin-right: 5px;
`
