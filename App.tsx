import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,StatusBar, useWindowDimensions} from "react-native"
import Svg , {Circle,Rect,Polygon}  from "react-native-svg";

function App () {

  const windowDimensions = useWindowDimensions();
  const [randombgcolor, setrandombgcolor] = useState('#FFFFFF');
  const[randomShapes, setrandomShapes] = useState<React.ReactNode[]>([]);

  const generatecolor = () =>
  {
    const hexrange = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++)
    {
      color += hexrange[Math.floor(Math.random() * 16)]
    }
    setrandombgcolor(color);
  }

  const generateshapes = () => {
    const allshapes = [];
    const radius = 25;
    const width = 50;
    const length = 50 ;
    const triangle = 330;
    const trianglePoints = [
      Math.random() * (windowDimensions.width - triangle),
      Math.random() * (windowDimensions.height - triangle),
      Math.random() * (windowDimensions.width - triangle),
      Math.random() * (windowDimensions.height - triangle),
      Math.random() * (windowDimensions.width - triangle),
      Math.random() * (windowDimensions.height - triangle),
    ];
    for (let i=0; i<10; i++)
    {
      const pickshape = Math.floor(Math.random() * 3);
      let shape ;
      switch(pickshape)
      {
        case 0:
          shape = (<Circle
            key={i}
            cx={Math.random() * (windowDimensions.width - 2 * radius) + radius}
            cy={Math.random() * (windowDimensions.height - 2 * radius) + radius}
            r={radius}
            fill="#DFAF2B"
          />);
          break;
        case 1:
          shape = (<Rect
            key={i}
            x={Math.random() * (windowDimensions.width - width)}
            y={Math.random() * (windowDimensions.height - length)}
            width={width}
            height={length}
            fill="#218F76"
          />
          );
          break;
        case 2:
          shape = ( <Polygon
            key={i}
            points={trianglePoints.join(' ')}
            fill="#E71C23"
          />
          );
          break;
        default:
          break;
      }
      allshapes.push(shape)
    }
    setrandomShapes(allshapes);
  };



  return (
<>
<StatusBar backgroundColor={randombgcolor}></StatusBar>
<View style={[Styles.container,{backgroundColor : randombgcolor}]}>
<Svg  style={StyleSheet.absoluteFillObject}
          width={windowDimensions.width}
          height={windowDimensions.height}>{randomShapes}</Svg>
<TouchableOpacity  onPress={() => {generatecolor(),generateshapes()}}>
    <View style={Styles.actionbtn}>
      <Text style={Styles.actionbtntxt}>BG Changer</Text>
   </View>
</TouchableOpacity>
</View>
</>
  );
}

const Styles = StyleSheet.create(
{
  area:{
    flex : 1,
  },
  container :{
    flex : 1,
    alignItems :'center',
    justifyContent : 'center'
  },
  actionbtn :{
    width: 200,
    borderRadius : 12,
    borderColor : '#E71C23',
    backgroundColor:'#67E6DC',
    paddingHorizontal : 40 ,
    paddingVertical : 10

  },
  actionbtntxt :{
    fontSize : 20 ,
    fontStyle : 'italic',
    fontWeight : '500' ,
    color : "#192A56",
    textTransform : "uppercase"
  }
});
export default App