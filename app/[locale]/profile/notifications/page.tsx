import { getNotifications } from "@/actions/notification.action";
import NotificationCard from "@/components/cards/NotificationCard";
import Header from "@/components/shared/Header";
import NoResult from "@/components/shared/NoResult";
import { auth } from "@clerk/nextjs/server";
import ClearButton from "./_components/ClearButton";
import { getTranslations } from "next-intl/server";

async function Page() {
  const t = await getTranslations();
  const { userId } = await auth();
  const notifications = await getNotifications(userId!);

  return (
    <>
      <Header
        title={t("notifications")}
        description={t("notificationDescription")}
      />

      <div className="mt-4 flex flex-col space-y-2">
        {notifications.length === 0 && (
          <NoResult
            title={t("noNotifications")}
            description={t("noNotificationsDescription")}
          />
        )}
        {notifications.map((n) => (
          <NotificationCard key={n._id} item={JSON.parse(JSON.stringify(n))} />
        ))}
        {notifications.length > 0 && <ClearButton />}
      </div>
    </>
  );
}

export default Page;
