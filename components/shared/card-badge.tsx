import { Badge } from "../ui/badge";

const CardBadge = ({ children }: { children: string }) => {
  return (
    <div>
      <Badge className="fbg-accent bg-accent text-[7px] md:text-[12px]">
        {children}
      </Badge>
    </div>
  );
};

export default CardBadge;
