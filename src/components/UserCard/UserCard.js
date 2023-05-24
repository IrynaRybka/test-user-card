import { useEffect, useState } from 'react';
import background from '../../images/backgroundImg.png';
import Boy from '../../images/Boy.png';
import ellipse from '../../images/Ellipse.png';

import {
  AvatarImg,
  CardLi,
  ContainerUl,
  ContentContainer,
  FollowBtn,
  TweetP,
  FollowP,
  LogoIcon,
  BackgroundImg,
  TweetSpan,
  FollowSpan,
  DefaultAvatar,
  EllipseImg,
  LoadMoreBtn,
  ContainerLoadMore,
  DescrP,
} from './UserCard.styled';

const initFollowers = 100500;

export const UserCard = props => {
  const [currentItems, setCurrentItems] = useState(() => {
    return JSON.parse(localStorage.getItem('currentItems')) ?? [];
  });
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem('followers')) ?? {};
  });
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem('isFollowing')) ?? {};
  });
  const [visible, setVisible] = useState(3);
  
  const { data } = props;

  useEffect(() => {
    window.localStorage.setItem('currentItems', JSON.stringify(currentItems));
    window.localStorage.setItem('followers', JSON.stringify(followers));
    window.localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [currentItems, followers, isFollowing]);

  useEffect(() => {
    setCurrentItems(data.slice(0, visible));
  }, [visible, data]);
 
  const showMoreItems = () => {
    setVisible(previousValue => previousValue + 3);
  };
 
  const handleFollowClick = id => {
    const updatedIsFollowing = !isFollowing[id];
    const updatedFollowers = updatedIsFollowing
      ? (followers[id] || initFollowers) + 1
      : (followers[id] || initFollowers) - 1;

    setIsFollowing(prevState => ({
      ...prevState,
      [id]: updatedIsFollowing,
    }));

    setFollowers(prevFollowers => ({
      ...prevFollowers,
      [id]: updatedFollowers,
    }));
  };

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <ContainerUl>
        {currentItems.map(({ avatar, id, tweets, user }) => (
          <CardLi key={`${id}-${user}`}>
            <LogoIcon id="icon-logo" />
            <BackgroundImg src={background} alt="background" />
            <ContentContainer>
              {!avatar ? (
                <DefaultAvatar src={Boy} alt="avatar" width={80} height={80} />
              ) : (
                <div style={{ marginBottom: 26 }}>
                  <AvatarImg src={avatar} alt={user} width={62} height={62} />
                  <EllipseImg src={ellipse} alt="frame for avatar" width={80} />
                </div>
              )}
              <TweetP>
                <TweetSpan>{tweets}</TweetSpan>
                tweets
              </TweetP>
              <FollowP>
                <FollowSpan>
                  {formatNumber(followers[id] || initFollowers)}
                </FollowSpan>
                followers
              </FollowP>
              <FollowBtn
                type="button"
                onClick={() => handleFollowClick(id)}
                style={{
                  backgroundColor: isFollowing[id] ? '#5cd3a8' : '#ebd8ff',
                }}
              >
                {isFollowing[id] ? 'Following' : 'Follow'}
              </FollowBtn>
            </ContentContainer>
          </CardLi>
        ))}
      </ContainerUl>
      {data.length === visible ? (
        <ContainerLoadMore >
          <DescrP>It`s end of all twits</DescrP>
          <LoadMoreBtn
            type="button"
            onClick={showMoreItems}
            disabled={true}
            style={{ backgroundColor: '#F0F0F0', color: '#151718' }}
          >
            Load More
          </LoadMoreBtn>
        </ContainerLoadMore>
      ) : (
        <LoadMoreBtn type="button" onClick={showMoreItems}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
