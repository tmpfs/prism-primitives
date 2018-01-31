export default ({colors, fonts}) => {
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
