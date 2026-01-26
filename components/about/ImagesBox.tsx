interface ImagesBoxProps {
  reversed: boolean;
  smallImg: string;
  bigImg: string;
  altImg: string;
}

export function ImagesBox({
  reversed,
  smallImg,
  bigImg,
  altImg,
}: ImagesBoxProps) {
  return (
    <div className="xl:h-[120vh] h-auto flex xl:flex-row flex-col gap-6 xl:gap-0">
      <div
        className={`w-full object-cover ${
          reversed
            ? "h-[50vh] xl:flex-1 xl:h-[70%]"
            : "h-[80vh] xl:w-[55%] xl:h-full"
        }`}
      >
        <img
          src={reversed ? smallImg : bigImg}
          alt={altImg}
          className="h-full w-full object-center object-cover"
        />
      </div>
      <div
        className={`w-full object-cover ${
          reversed
            ? "h-[80vh] xl:w-[55%] xl:h-full"
            : "h-[50vh] xl:flex-1 xl:h-[70%]"
        }`}
      >
        <img
          src={reversed ? bigImg : smallImg}
          alt={altImg}
          className="h-full w-full object-center object-cover"
        />
      </div>
    </div>
  );
}
