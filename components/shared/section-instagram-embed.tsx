import { LayoutGridDemo } from "./custom-grid";

const InstagramEmbeds = () => {
  return (
    <div className="section flex flex-col gap-8">
      <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-7xl text-black">
        We do Custom Packages Too
      </h1>
      <div>
        <LayoutGridDemo />
      </div>
    </div>
  );
};

export default InstagramEmbeds;
