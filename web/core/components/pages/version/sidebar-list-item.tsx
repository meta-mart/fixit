import { observer } from "mobx-react";
import Link from "next/link";
// fixit types
import { TPageVersion } from "@fixit/types";
// fixit ui
import { Avatar } from "@fixit/ui";
// helpers
import { cn } from "@/helpers/common.helper";
import { renderFormattedDate, renderFormattedTime } from "@/helpers/date-time.helper";
import { getFileURL } from "@/helpers/file.helper";
// hooks
import { useMember } from "@/hooks/store";

type Props = {
  href: string;
  isActive: boolean;
  version: TPageVersion;
};

export const FixitVersionsSidebarListItem: React.FC<Props> = observer((props) => {
  const { href, isActive, version } = props;
  // store hooks
  const { getUserDetails } = useMember();
  // derived values
  const ownerDetails = getUserDetails(version.owned_by);

  return (
    <Link
      href={href}
      className={cn("block p-2 rounded-md w-72 hover:bg-custom-background-80 transition-colors", {
        "bg-custom-background-80": isActive,
      })}
    >
      <p className="text-sm font-medium truncate">
        {renderFormattedDate(version.last_saved_at)} {renderFormattedTime(version.last_saved_at)}
      </p>
      <p className="mt-2 flex items-center gap-1 text-xs">
        <Avatar
          src={getFileURL(ownerDetails?.avatar_url ?? "")}
          name={ownerDetails?.display_name}
          shape="square"
          size="sm"
          className="flex-shrink-0"
        />
        <span className="text-custom-text-300">{ownerDetails?.display_name}</span>
      </p>
    </Link>
  );
});