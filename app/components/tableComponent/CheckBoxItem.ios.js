'use strict';

import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

import Colors from '../../constants/Colors';

import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme
} from 'react-native-material-kit';


var CheckBoxSelectedData ;
var isChecked = false;

export default class FormItemsCheckBoxView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: this.props.row,
      CheckBoxSelectedData: [],
    };
var  CheckBoxSelectedData =[];
  }

  handleChange(text) {
    this.props.onUserInput(this.state.row.title, text);
  }
  checkString(array,string){
    for (var i = 0; i < array.length; i++)
    {
      let dataTemp= array[i];
      if (dataTemp == string) {
        return true;
      }
      return false
    }
  }
  componentWillUnmount()
  {
    var CheckBoxSelectedData=[];
  }

  render() {
    let CheckBoxSelectedData = this.state.CheckBoxSelectedData;
    var _this = this;
    let items = [];
    items.push(this.props.row.label);
    var radioView = items.map((row)=>{
      if(!this.props.value)
        isChecked = false;
      else
        isChecked = true;
      if(this.state.row.content &&  this.checkString(this.state.row.content,row)){
        isChecked = true;
        this.handleChange(this.state.row.content);
        CheckBoxSelectedData.push(row);
      }
      return (
        <View style={styles.col}>
          <MKCheckbox checked={isChecked} borderOnColor={Colors.mainColor} borderOffColor={Colors.secondaryColor} onCheckedChange={(e) => {
            if (e.checked == true) {
              CheckBoxSelectedData[0] = row;
            } else {
              CheckBoxSelectedData.length = 0;
            }
            _this.handleChange(CheckBoxSelectedData.join(""));
          }}/>
          <Text style={styles.legendLabel}>{row}</Text>
        </View>
      )
    });

    return (
      <View style={styles.container}>

        <Text style={{marginLeft: 16,textAlign: 'left', fontSize: 16, color: Colors.black,}}>
          {this.state.row.label}
        </Text>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            {radioView}
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors.white,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 20,
    marginTop: 5,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 7,
    alignItems:'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  legendLabel: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 12,
    fontWeight: '300'
  }
});
