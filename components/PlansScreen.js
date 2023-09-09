import React, {Component, useState} from 'react';

import {FlatList, SafeAreaView, Text, View} from 'react-native';
import ListDelete from './ListDelete';
import Listplan from './Listplan';

const Initialplans = [
  {
    id: 1,
    plantype: 'e1',
    description: 'Sit UP',
    image: require('../assests/training.jpg'),
  },
  {
    id: 2,
    plantype: 'e2',
    description: 'ds2',
    image: require('../assests/training.jpg'),
  },
  {
    id: 3,
    plantype: 'e2',
    description: 'ds2',
    image: require('../assests/training.jpg'),
  },
];

const PlansScreen = props => {
  const [plans, setPlans] = useState(Initialplans);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = plan => {
    // console.log(plans[0].id);
    setPlans(plans.filter(p => p.id !== plan.id));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 0.05,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'whitesmoke',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.3,
          zIndex: 5,
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
          }}>
          Health plan
        </Text>
      </View>
      <View style={{backgroundColor: 'white', flex: 0.8, zIndex: 1}}>
        <FlatList
          data={plans}
          keyExtractor={plan => plan.id.toString()}
          renderItem={({item}) => (
            <Listplan
              image={item.image}
              plantype={item.plantype}
              description={item.description}
              onPress={() => console.log('plan selected ', item.description)}
              renderRightActions={() => (
                <ListDelete onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: '80%',
                height: 0.5,
                backgroundColor: 'grey',
                alignSelf: 'flex-end',
              }}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setPlans([
              {
                id: 1,
                plantype: 'e1',
                description: 'Sit UP',
                image: require('../assests/training.jpg'),
              },
              {
                id: 2,
                plantype: 'e2',
                description: 'ds2',
                image: require('../assests/training.jpg'),
              },
            ]);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlansScreen;
