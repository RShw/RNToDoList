import React from 'react';
import { SafeAreaView } from 'react-native';
import ProviderListToDo from './src/context/ContextListToDo';
import NavigatorsContainer from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {

  return (
    <ProviderListToDo>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigatorsContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </ProviderListToDo>
  );
}

export default App;
