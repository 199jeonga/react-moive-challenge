import { useLoading, TailSpin } from "@agney/react-loading";

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <TailSpin width="50" />,
    loaderProps: {
      style: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "black",
      },
    },
  });
  return (
    <div {...containerProps} color="black">
      {indicatorEl}
    </div>
  );
}
export default Loading;
