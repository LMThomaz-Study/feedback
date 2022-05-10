import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <ChatTeardropDots
          size={24}
          weight='bold'
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}>
        <View />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
