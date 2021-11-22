import BarLoader from "react-spinners/BarLoader";

/**
 * Separated out to allow for better customization in the future
 */
const LoadingIndicator = () => {
  return (
    <div className="mt-4 d-flex justify-content-center">
      <BarLoader loading={true} color="var(--spi-color-text)" />
    </div>
  );
};

export default LoadingIndicator;
