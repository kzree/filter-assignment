import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const usePageTitle = ({ pageName = '', translatePageName = true } = {}) => {
  const { t } = useTranslation();

  useEffect(() => {
    const translationKey = `page.${pageName}.title`;

    if (!pageName) {
      window.document.title = t('page.default.title');
    } else {
      window.document.title = `${translatePageName ? t(translationKey) : pageName} | ${t(
        'page.default.title',
      )}`;
    }
  }, [pageName, translatePageName, t]);
};
