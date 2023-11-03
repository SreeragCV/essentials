function Tabs({ children, button }) {
  return (
    <>
      <menu>{button}</menu>
      {children}
    </>
  );
}

export default Tabs;
