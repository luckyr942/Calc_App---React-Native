import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';

const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  

  const handleBackspace = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };
  const calculateValue =()=>{
    const d = eval(displayValue);
    
    setDisplayValue(d.toString());
  }
  const handleButtonPress = () => {
    Animated.sequence([
      Animated.spring(scaleAnimation, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(scaleAnimation, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.wrapper}>
      <TextInput value={displayValue} style={styles.display} />
      
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "7")} style={styles.btn}>
        <Animated.Text style={[styles.btnText, { transform: [{ scale: scaleAnimation }] }]}>7</Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "8")} style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "9")} style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "+")} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "4")} style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "5")} style={styles.btn}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "6")} style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "-")} style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "1")} style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "2")} style={styles.btn}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "3")} style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "*")} style={styles.btn}>
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={handleBackspace} style={styles.btn}>
          <Text style={styles.btnText}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "0")} style={styles.btn}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + ".")} style={styles.btn}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayValue(displayValue + "/")} style={styles.btn}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => setDisplayValue("")} style={[styles.btn,{width:'50%'}]}>
          <Text style={styles.btnText}>clear</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={calculateValue} style={[styles.btn,{width:'45%'}]}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  display: {
    textAlign: 'center',
    backgroundColor: 'lightblue',
    textAlign: 'right',
    borderRadius: 10,
    fontSize: 28,
    padding: 10,
    width: '100%',
    height: 100,
    marginTop: 'auto',
  },
  btn: {
    padding: 10,
    backgroundColor: 'rgb(182, 146, 194)',
    borderRadius: 10,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 25,
  },
});

export default App;