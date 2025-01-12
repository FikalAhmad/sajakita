import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonACard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[150px] w-[230px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
