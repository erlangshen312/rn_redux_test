import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import {
  dimensionHeight,
  dimensionWidth,
  mlColors,
} from '../../services/colors/colors';

export default function News({navigation}) {
  const {container} = styles;
  const [data, setData] = useState([]);
  const getNews = async () => {
    const res = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=0fabdbaaa4a14cad8f4b59940fb0b9d6',
    );
    setData(res.data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  console.warn(data);
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Details', {item})}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                margin: 6,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 12,
                shadowColor: 'black',
                shadowOpacity: 0.08,
                shadowOffset: {width: 0, height: 3},
                shadowRadius: 10,
                elevation: 1,
              }}>
              <Image
                source={{uri: item.urlToImage}}
                style={{
                  width: dimensionWidth / 3,
                  height: dimensionHeight / 7,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginLeft: 10,
                  padding: 5,
                  borderRadius: 12,
                  shadowColor: 'black',
                  shadowOpacity: 0.08,
                  shadowOffset: {width: 0, height: 3},
                  shadowRadius: 10,
                  elevation: 1,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: mlColors.light_black,
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                  {item.author}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
