// components/ExampleComponent.jsx
import { useTranslation } from 'react-i18next';

const ExampleComponent = () => {
  const { t } = useTranslation('common');

  return <h1>{t('welcome')}</h1>;
};

export default ExampleComponent;
