import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Showcase from '@gorhom/showcase-template';
import {version, description} from '../../package.json';

const examples = [
  {
    name: 'Settings',
    slug: 'Settings',
  },
  {
    name: 'FAQ',
    slug: 'faq',
  },
  {
    name: 'Privacy and Security',
    slug: 'privacy',
  },
];

const ProfileScreen = () => {
  // hooks
  const {navigate} = useNavigation();

  // callbacks
  const handleOnExamplePress = (slug: string) => {
    navigate(slug);
  };

  // renders
  return (
    <Showcase
      theme="dark"
      name="sype."
      description={description}
      version={version}
      author={{
        username: 'sype-privacy',
        url: 'https://github.com/kartikeya01/sype',
      }}
      data={examples}
      handleOnPress={handleOnExamplePress}
    />
  );
};

export default ProfileScreen;
