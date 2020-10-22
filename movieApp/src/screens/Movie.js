import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Image, StatusBar} from 'react-native';
import {IconButton, Text, Title} from 'react-native-paper';
import {map} from 'lodash';
import {Rating} from 'react-native-ratings';
import {getMovieByIdApi} from '../api/movies';
import ModalVideo from '../components/ModalVideo';
import {BASE_PATH_IMG} from '../utils/constants';
import usePreferences from '../hooks/usePreferences';
import starDark from '../assets/png/starDark.png';
import starLight from '../assets/png/starLight.png';

const Movie = ({route}) => {
  const {id} = route.params;
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    getMovieByIdApi(id).then((response) => {
      setMovie(response);
    });
  }, []);

  if (!movie) return null;

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieImage posterPath={movie.poster_path} />
        <MovieTrailer setShowVideo={setShowVideo} />
        <MovieTitle movie={movie} />
        <MovieRating
          voteCount={movie.vote_count}
          voteAverage={movie.vote_average}
        />
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={[styles.overview, {marginBottom: 20}]}>
          Fecha de lanzamiento: {movie.release_date}
        </Text>
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
    </>
  );
};

export default Movie;

const MovieImage = ({posterPath}) => {
  return (
    <View style={styles.viewPoster}>
      <Image
        style={styles.poster}
        source={{uri: `${BASE_PATH_IMG}/original${posterPath}`}}
      />
    </View>
  );
};

const MovieTrailer = ({setShowVideo}) => {
  return (
    <View style={styles.viewPlay}>
      <IconButton
        icon="play"
        color="#000"
        size={30}
        style={styles.play}
        onPress={() => setShowVideo(true)}
      />
    </View>
  );
};

const MovieTitle = ({movie}) => {
  return (
    <View style={styles.viewInfo}>
      <Title>{movie.title}</Title>
      <View style={styles.viewGenres}>
        {map(movie.genres, (genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const MovieRating = ({voteCount, voteAverage}) => {
  const media = voteAverage / 2;
  const {theme} = usePreferences();
  return (
    <View style={styles.viewRating}>
      <Rating
        type="custom"
        ratingImage={theme === 'dark' ? starDark : starLight}
        ratingColor="#ffc205"
        ratingBackgroundColor={theme === 'dark' ? '#192734' : '#f0f0f0'}
        startingValue={media}
        imageSize={20}
        style={{marginRight: 15}}
      />
      <Text style={{fontSize: 16, marginRight: 5}}>{media}</Text>
      <Text style={{fontSize: 12, color: '#8697a5', marginLeft: 20}}>
        {voteCount} votos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  play: {
    backgroundColor: '#fff',
    marginTop: -40,
    marginRight: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  viewInfo: {
    marginHorizontal: 30,
  },
  viewGenres: {
    flexDirection: 'row',
  },
  genre: {
    marginRight: 20,
    color: '#8697a5',
  },
  viewRating: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  overview: {
    marginHorizontal: 30,
    marginTop: 20,
    textAlign: 'justify',
    color: '#8697a5',
  },
});
