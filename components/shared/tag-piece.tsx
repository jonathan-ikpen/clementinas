import { Badge } from "../ui/badge";

const PieceTag = ({ pieces }: { pieces: string }) => {
  return (
    <div>
      <Badge className="fbg-accent bg-accent text-[7px] md:text-[12px]">
        {pieces}
      </Badge>
    </div>
  );
};

export default PieceTag;
