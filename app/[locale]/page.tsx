import { useTranslations } from "next-intl";

function Home() {
  const t = useTranslations();
  return ( <>{t('hello')}</> );
}

export default Home;