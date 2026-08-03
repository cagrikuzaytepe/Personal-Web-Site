const Container = ({ as: Component = 'div', className = '', children, ...props }) => (
  <Component className={`container ${className}`.trim()} {...props}>
    {children}
  </Component>
);

export default Container;
