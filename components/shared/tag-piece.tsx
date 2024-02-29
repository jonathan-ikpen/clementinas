import { Badge } from "../ui/badge";

const PieceTag = ({ pieces }: { pieces: string }) => {
  return (
    <div>
      <Badge className="fbg-accent text-[7px] md:text-[12px]">{pieces}</Badge>
    </div>
  );
};

export default PieceTag;
