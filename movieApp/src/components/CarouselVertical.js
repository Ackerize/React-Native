import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {map, size} from 'lodash';
import {Text, Title} from 'react-native-paper';
import {BASE_PATH_IMG} from '../utils/constants';
import {getGenreMovieApi} from '../api/movies';

const {width} = Dimensions.get('window');

const ITEM_WIDTH = Math.round(width * 0.7);

const CarouselVertical = ({data, navigation}) => {
  return (
    <Carousel
      layout={'default'}
      data={data}
      renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
};

const RenderItem = ({data, navigation}) => {
  const {id, title, poster_path, genre_ids} = data.item;
  const [genres, setGenres] = useState(null);
  const imageUrl = `${BASE_PATH_IMG}/original${poster_path}`;

  useEffect(() => {
    getGenreMovieApi(genre_ids).then((response) => {
      setGenres(response);
    });
  }, []);

  const onNavigation = () => {
    navigation.navigate('movie', { id });
  };

  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <Title style={styles.title}>{title}</Title>
        <View style={styles.genres}>
          {genres &&
            map(genres, (genre, index) => (
              <Text key={index} style={styles.genre}>
                {genre}
                {index !== size(genres) - 1 && ', '}
              </Text>
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CarouselVertical;

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  genres: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  genre: {
    fontSize: 12,
    color: '#8997a5',
  },
});
