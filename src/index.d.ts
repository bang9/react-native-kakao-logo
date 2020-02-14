import React from "react";
import { StyleProp, ViewStyle, ViewProps } from "react-native";
interface IProps extends ViewProps {
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
}
declare const _default: React.NamedExoticComponent<IProps>;
export default _default;
