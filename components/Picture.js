import Image from "next/image";

export default function Picture({ url, width, height }) {
  return (
    <div className="col text-center">
      <Image
        src={`https:${url}`}
        className="img-fluid"
        alt="Responsive image"
        layout="intrinsic"
        width={width}
        height={height}
      />
    </div>
  );
}
