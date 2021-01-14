import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import {
  dimensionHeight,
  dimensionWidth,
  mlColors,
} from '../../services/colors/colors';

export default function NewsDetails({route}) {
  const {item} = route.params;

  const openUrl = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView>
      <Image
        source={{uri: item.urlToImage}}
        style={{
          width: dimensionWidth,
          height: dimensionHeight / 4,
        }}
      />
      <View style={{padding: 10}}>
        <Text style={{fontWeight: '700', fontSize: 15}}>{item.title}</Text>
        <Text style={{marginTop: 30}}>{item.description}</Text>
        <TouchableOpacity
          style={{
            marginTop: 30,
            borderBottomWidth: 2,
            borderBottomColor: mlColors.blue,
          }}
          onPress={() => openUrl(item.url)}>
          <Text style={{}}>{item.source.name}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
