import './RemadeInfo.css';

import { Informer } from '@consta/uikit/Informer';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/stand/bem';

const cnRemadeInfo = cn('RemadeInfo');

export const RemadeInfo: React.FC<{
  apiUrl: string;
  commponentName: string;
  libraryName: string;
}> = (props) => {
  const { commponentName, apiUrl, libraryName } = props;
  return (
    <Informer className={cnRemadeInfo()} status="system" view="bordered">
      <Text>
        Это компонент{' '}
        <Text as="span" weight="bold">
          {commponentName}
        </Text>{' '}
        из библиотеки{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href={apiUrl}
          target="_blank"
        >
          {libraryName}
        </Text>{' '}
        с тематизацией из{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://consta.gazprom-neft.ru"
          target="_blank"
        >
          дизайн-системы Consta
        </Text>
      </Text>
    </Informer>
  );
};

export const RemadeTableInfo: React.FC<{ apiUrl: string }> = (props) => {
  const { apiUrl } = props;
  return (
    <Informer className={cnRemadeInfo()} status="system" view="bordered">
      <Text>
        Здесь описаны только основные свойства компонента.{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href={apiUrl}
          target="_blank"
        >
          Посмотреть все свойства
        </Text>
      </Text>
    </Informer>
  );
};
