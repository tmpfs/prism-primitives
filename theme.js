export default {
  colors: {
    cream: '#fdfbdf',
    muted: '#9a9a9a',
    green: '#023926',
    backgroundGreen: '#16a085',
    lightGreen: '#045B1E',
    orange: '#ff6600'
  },
  fonts: {
    regular: 'WorkSans-Regular'
  },
  styles: ({colors, fonts}) => {
    return {
      View: {
        flex: 1
      },
      Text: {
        fontFamily: fonts.regular,
        fontSize: 18,
        color: colors.muted
      }
    }
  }
}
