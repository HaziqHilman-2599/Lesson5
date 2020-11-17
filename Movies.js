import React from 'react';
import {Text, Image, View} from 'react-native';

// exercise 2
const movie = {title: 'Doctor Sleep', year: '2019'};
class Movie extends React.Component {
  render(): React$Node {
    return (
      <Text>
        {movie.title} {'\n'} {movie.year}

      </Text>
    );
  }
}
// Exercise 3
const Movielist = () => {
    return MOVIES_DATA.map((data) => <View>
        <Text> {data.title}{'\n'}{data.year}{'\n'}</Text>
            <Image source = {data.poster} /></View>)
}
// Exercise 4
const MOVIES_DATA = [{
        title: 'Doctor Sleep',
    year: '2019',
            // Exercise 5
        poster: require('./img/doctor-sleep.jpg'),
  },
        {
        title: 'Midway',
        year: '2019',
        poster: require('./img/midway.jpg'),
  },
];
export {Movielist};
