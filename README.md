<span class="module"><a href="https://github.com/bang9/react-native-kakao-logo" title="View this project"><img src="https://img.shields.io/badge/React Native-react--native--kakao--logo-black?style=flat-square&logo=react" alt="RNKakaoLogo" /></a></span>

<span class="npmversion"><a href="https://npmjs.org/package/react-native-kakao-logo" title="View this project on NPM"><img src="https://img.shields.io/npm/v/react-native-kakao-logo.svg" alt="NPM version" /></a></span>
<span class="npmdownloads"><a href="https://npmjs.org/package/react-native-kakao-logo" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/react-native-kakao-logo.svg" alt="NPM downloads" /></a></span>

# react-native-kakao-logo

(not official) Kakao svg-logo for React Native

### Required

install `react-native-svg`

### Preview

![login_screen](screenshots/login.jpeg)

### Example

```jsx
import KakaoLogo from "react-native-kakao-logo";

<KakaoLogo size={30} style={{ width: 30 }} />;
```

### Props

| Prop   | Type      | Default | Description        |
| :----- | :-------- | :------ | :----------------- |
| size?  | number    | 25      | Logo size          |
| color? | string    | #3C1E1E | Logo color         |
| style? | ViewStyle | none    | Logo Wrapper Style |
