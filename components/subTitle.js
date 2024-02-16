const classes = {
  subTitle: "text-1xl font-bold text-default tracking-wide mb-3",
};

const SubTitle = (props) => {
  const { children } = props;

  return <p className={classes.subTitle}>{children}</p>;
};

export default SubTitle;
