import React from "react";

const Icon = ({ name, children, className, folder = "CircleIcons", ...props }) => {
  const ImportedIconRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../images/${folder}/${name.toLowerCase()}.svg`
          )
        ).default;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of simplicity
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();

    return () => setLoading(false)
  }, [name, folder]);


  if (!loading && ImportedIconRef.current) {
    const ImportedIcon = ImportedIconRef.current;
    return children ? (
      <div className={"IconWrapper " + (className || "")}>
        <ImportedIcon {...props} />
        <h3 className="IconLabel">{children}</h3>
      </div>
    ) : (
      <ImportedIcon {...props} />
    );
  }

  return null;
};

export default Icon;