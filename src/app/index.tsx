import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants';
import { Banner } from "../components/banner";
import { Search } from "../components/search";  
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
      />
    <TrendingFoods/>

    <Section
        name="Mais pedidos"
        label="Veja mais"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
      />
    <TrendingFoods/>

    <Section
        name="Queridinhos da Semana"
        label="Veja todos"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-xl"
      />

      <Restaurants/>

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-xl"
      />

      <RestaurantVerticalList/>
      
    </ScrollView>
  );
}
