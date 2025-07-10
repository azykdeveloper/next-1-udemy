import { Separator } from "@/components/ui/separator";
import InstructorHeader from "../_components/InstructorHeader";

function SettingsPage() {
  return (
    <>
      <InstructorHeader
        title="Settings"
        description="Manage your account settings"
      />
      <Separator className="my-3 bg-muted-foreground" />
      {/* <Tabs defaultValue="profile">
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
      </Tabs> */}
    </>
  );
}

export default SettingsPage;
