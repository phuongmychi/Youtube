import React,{Component} from 'react';
import { Alert, Button, Linking,Dimensions , Text, View , Share, TextInput , Image,ScrollView,StyleSheet,TouchableOpacity ,SafeAreaView,RefreshControl,BackHandler, DrawerLayoutAndroidBase } from 'react-native';
import axios from 'axios';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isloaded :false,
            items:[],
            error:null,
            videoid :''
        }
    }
    
      componentDidMount(){
        axios.get(urlYoutubeAPI).then((rs)=>{
            console.log(rs);
            this.setState({
                isloaded :true,
                items:rs.data.items,
                
            })
        },(error)=>{
            this.setState({
                isLoaded: true,
                error
            })
        })
    }
    render(){
            const {items,isloaded, error} = this.state;
      return(<View>
            {item.map(item =>(
              <Text>{item.snippet.title}</Text>
            ))}
        <View>
      )
    }
}
export default App;
