import { Separator } from "@/components/ui/separator";
import InstructorHeader from "../_components/InstructorHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./_components/Profile";
import Account from "./_components/Account";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/actions/user.action";

async function SettingsPage() {
  const { userId } = await auth();
  const userJSON = await getUserById(userId!);

  const user = JSON.parse(JSON.stringify(userJSON));
  return (
    <>
      <InstructorHeader
        title="Settings"
        description="Manage your account settings"
      />
      <Separator className="my-3 bg-muted-foreground" />
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Profile />
        </TabsContent>
        <TabsContent value="account">
          <Account {...user} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default SettingsPage;
