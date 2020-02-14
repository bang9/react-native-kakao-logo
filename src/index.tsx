import React from "react";
import { StyleProp, View, ViewStyle, ViewProps } from "react-native";
import { Path, Svg } from "react-native-svg";

interface IProps extends ViewProps {
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
}

const KakaoLogo: React.FC<IProps> = ({ size, color, style }) => {
    return (
        <View style={style}>
            <Svg height={size ?? 25} width={size ?? 25} viewBox={"0 0 50 50"}>
                <Path
                    d={
                        "M25.05,6.23c-12,0-21.73,7.46-21.73,16.66,0,5.73,3.78,10.78,9.53,13.78a.54.54,0,0,1,.28.58L11.57,45a.37.37,0,0,0,.57.38L21,39.43a.71.71,0,0,1,.49-.12,27.6,27.6,0,0,0,3.55.24c12,0,21.73-7.46,21.73-16.66S37.05,6.23,25.05,6.23Z"
                    }
                    fill={color || "#3c1e1e"}
                />
            </Svg>
        </View>
    );
};

export default React.memo(KakaoLogo);
