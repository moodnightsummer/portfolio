const classes = {
  subTitle: "text-2xl font-bold text-default tracking-wide",
};

const SubTitle = (props) => {
  const { children } = props;

  return <p className={classes.subTitle}>{children}</p>;
};

export default SubTitle;
