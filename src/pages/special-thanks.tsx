import { PageView } from "@util/Types";
import PageLayout from "@modules/Layout/Page";

const SpecialThanks: PageView = () => {
  return (
    <PageLayout
      title="A Thank You From"
      description="We want to acknowledge some individuals who help with Stream-Pi behind the scenes"
      underConstruction
      pageSource="/special-thanks.tsx"
    >
      <h1 className="text-center">We Want to Say Thank You!</h1>
    </PageLayout>
  );
};

export default SpecialThanks;
