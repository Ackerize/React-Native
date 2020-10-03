import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import moment from 'moment';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';
import firebase from '../utils/firebase';
import 'firebase/firestore';
import Birthday from './Birthday';

firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

const ListBirthday = ({user}) => {
  const [showList, setShowList] = useState(true);
  const [birthday, setBirthday] = useState([]);
  const [pasados, setPasados] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setBirthday([]);
    setPasados([]);
    db.collection(user.uid)
      .orderBy('dateBirth', 'asc')
      .get()
      .then((response) => {
        const itemsArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          itemsArray.push(data);
        });
        formatData(itemsArray);
      });
    setReload(false);
  }, [reload]);

  const formatData = (items) => {
    const currentData = moment().set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    const tempArray = [];
    const pasadoTempArray = [];

    items.forEach((item) => {
      const dateBirth = new Date(item.dateBirth.seconds * 1000);
      const dateBirthday = moment(dateBirth);
      const currentYear = moment().get('year');
      dateBirthday.set({
        year: currentYear,
      });

      const diffDate = currentData.diff(dateBirthday, 'days');
      const itemTemp = item;
      itemTemp.dateBirth = dateBirthday;
      itemTemp.days = diffDate;

      if (diffDate <= 0) {
        tempArray.push(itemTemp);
      } else {
        pasadoTempArray.push(itemTemp);
      }
    });

    setBirthday(tempArray);
    setPasados(pasadoTempArray);
  };

  const deleteBirthday = (birthday) => {
    Alert.alert(
      'Eliminar cumpleaños',
      `Estas seguro de eliminar el cumpleaños de ${birthday.name} ${birthday.lastname}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            db.collection(user.uid)
            .doc(birthday.id)
            .delete()
            .then(() => {
              setReload();
            })
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      {showList ? (
        <ScrollView style={styles.scrollView}>
          {birthday.map((item, index) => (
            <Birthday
              key={index}
              birthday={item}
              deleteBirthday={deleteBirthday}
            />
          ))}
          {pasados.map((item, index) => (
            <Birthday
              key={index}
              birthday={item}
              deleteBirthday={deleteBirthday}
            />
          ))}
        </ScrollView>
      ) : (
        <AddBirthday
          user={user}
          setShowList={setShowList}
          setReload={setReload}
        />
      )}

      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
};

export default ListBirthday;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  scrollView: {
    marginBottom: 50,
    width: '100%',
  },
});
