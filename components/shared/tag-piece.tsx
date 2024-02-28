import { Badge } from "../ui/badge";

const PieceTag = ({ pieces }: { pieces: string }) => {
  return (
    <div>
      <Badge className="fbg-accent text-[8px] md:text-[12px]">{pieces}</Badge>
    </div>
  );
};

export default PieceTag;
