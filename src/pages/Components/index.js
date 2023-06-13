import { Flex } from '@chakra-ui/react';
import styles from './styles.module.css';
import {
  Header,
  MovementCard,
  SimpleCard,
  TotalsCard,
} from '../../components';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';

export default function ComponentPage() {
  return (
    <div className={styles.teste}>
      <Header title={'Dashboard'} description={'Bem-vindo de volta, vamos economizar hoje.'} searchDescription={'Pesquise no Dashboard'} />
      <Flex direction="column" gap={3}>
        type = 1
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="in" type={1} />
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="out" type={1} />
        type = 2
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="in" type={2} />
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="out" type={2} date="" />

        type = 3
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="in" type={3} date="17/02/2023" />
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="out" type={3} date="17/02/2023" />
      </Flex>
      <Flex direction="column" gap={3}>
        <Flex direction="row" gap={3}>
          <TotalsCard title="Saldo total" value="4.450,00" color="var(--blue)" url={icon1} progress="50" percentage="+1,29" />
          <TotalsCard title="Total de despesa" value="1.900,00" color="var(--orange)" url={icon2} progress="100" percentage="+1,29" />
          <TotalsCard title="Total economizado" value="2.763,00" color="var(--purple-900)" url={icon3} progress="75" percentage="+2,00" />
        </Flex>
        <Flex direction="row" gap={3}>
          <SimpleCard title="Despesa" value="1.245,00" />
          <SimpleCard title="Entrada" value="5.695,00" />
          <SimpleCard title="Meta" value="1.750,00" />
        </Flex>
      </Flex>
    </div>
  );
}
