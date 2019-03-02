import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
        <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => {}} // this prop required on Android
        transparent
        >
            <View>
                <CardSection>
                    <Text>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

export { Confirm }; // reusable components need to be exported as named exports
