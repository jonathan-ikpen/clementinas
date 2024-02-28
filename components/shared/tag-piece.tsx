import { Badge } from "../ui/badge";

const PieceTag = ({ pieces }: { pieces: string }) => {
  return (
    <div>
      <Badge className="fbg-accent">{pieces}</Badge>
    </div>
  );
};

export default PieceTag;
