import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    btnContainer: {
        width: 80,
        height: 80,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",

      },
      btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
      }),
      btnText:{
        fontFamily:'Arial Rounded MT',
        fontSize: SIZES.small,
        textAlign:'center',
        marginTop: SIZES.small,
        color: COLORS.gray
      }
})

export default styles;